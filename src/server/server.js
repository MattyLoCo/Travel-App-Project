//  Create private folder for private credentials
const dotenv = require("dotenv");
dotenv.config();

//  Package to download image file to local project directory 'images'
const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

//  JS object to act as endpoint for routes
projectData = {
  city: "",
  longitude: "",
  latitude: "",
  dates: "",
  temp: "",
  descrip: "",
  imageurl: "",
};

//  Require framework and middleware
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

/* Middleware*/
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

//  Setup Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  return console.log(`Express server listening on port ${port}...`);
});

/* Routes */
//  GET
app.get("/all", sendData);

function sendData(request, response) {
  console.log(`${projectData} being sent back to weatherfetch now...`);
  response.send(projectData);
}

//  POST
app.post("/addcity", (req, res) => {
  //  Debug code console test
  for (let [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
  }
  console.log(`${typeof req.body} has reached server 'addcity' post function`);

  let postCity = req.body.city;
  let long = req.body.longitude;
  let lat = req.body.latitude;

  projectData.city = postCity;
  projectData.longitude = long;
  projectData.latitude = lat;

  res.send(projectData);
});

app.post("/traveldate", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'traveldate' post function`
  );

  projectData.dates = req.body;

  res.send(projectData);
});

app.post("/weatherpost", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'weatherpost' post function`
  );

  projectData.temp = weather.data[0].temp;
  projectData.descrip = weather.data[0].weather.description;

  res.send(projectData);
});

app.post("/forecastpost", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'forecastpost' post function`
  );

  projectData.temp = req.body.data[15].temp;
  projectData.descrip = req.body.data[15].weather.description;

  res.send(projectData);
});

app.post("/imageurlpost", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'imageurlpost' post function`
  );

  projectData.imageurl = req.body;

  let url = req.body.url;
  let path = `./images/${req.body.qstring}.png`;

  download(url, path, () => {
    console.log('Image download complete');
  })
});
