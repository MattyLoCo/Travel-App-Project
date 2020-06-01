//  Create private folder for private credentials
const dotenv = require("dotenv");
dotenv.config();

//  JS object to act as endpoint for routes
projectData = {
  city: "",
  longitude: "",
  latitude: "",
  dates: "",
  temp: "",
  descrip: ""
};

//  Require framework and middleware 
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.get('/all', sendData );

function sendData(request, response) {
  console.log(`${projectData} being sent back to weatherfetch now...`);
  response.send(projectData);
};


//  POST 
app.post('/addcity', (req, res) => {
  //  Debug code console test
  for (let [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
  };
  console.log(`${typeof req.body} has reached server 'addcity' post function`);

  let postCity = req.body.city;
  let long = req.body.longitude;
  let lat = req.body.latitude;

  projectData.city = postCity;
  projectData.longitude = long;
  projectData.latitude = lat;
  
  res.send(projectData);
});

app.post('/traveldate', (req, res) => {
  console.log(`${typeof req.body} has reached server 'traveldate' post function`);

  projectData.dates = req.body;

  res.send(projectData);
});

app.post('/weatherpost', (req, res) => {
  console.log(`${typeof req.body} has reached server 'weatherpost' post function`);

  let weather = req.body;
  let current_temp = weather.data[0].temp;
  let description  = weather.data[0].weather.description;

  projectData.temp = current_temp;
  projectData.descrip = description;

  res.send(projectData);
});

app.post('/forecastpost', (req, res) => {
  console.log(`${typeof req.body} has reached server 'forecastpost' post function`);

  let weather = req.body;
  let current_temp = weather.data[15].temp;
  let description  = weather.data[15].weather.description;

  projectData.temp = current_temp;
  projectData.descrip = description;

  res.send(projectData);
});