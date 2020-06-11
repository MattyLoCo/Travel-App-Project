//  Create private folder for private credentials
const dotenv = require("dotenv").config();

//  Package to download image file to local project directory 'images'
const fs = require("fs");
const request = require("request");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

//  JS object to act as endpoint for routes
projectData = {
  city: "",
  country: "",
  statecode: "",
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
const URL = require("url").URL;

/* Middleware*/
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

// Preflight Options
app.options("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

//  Export server to allow for multiple servers for testing
module.exports = app;


/* Routes */
//  GET
app.get("/all", (request, response) => {
  console.log(`${projectData} being sent back to weatherfetch now...`);
  response.send(projectData);
});

app.get("/weatherbit", (req, res) => {
  let newurl = new URL(
    "https://api.weatherbit.io/v2.0/forecast/daily?lat=" +
      projectData.latitude +
      "&lon=" +
      projectData.longitude +
      "&units=I&key=" +
      process.env.WEATHERBIT_API
  );
  console.log(newurl);

  request({ url: newurl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error });
    }

    res.json(JSON.parse(body));
  });
});

app.get("/pixabay", (req, res) => {
  let result = encodeURIComponent(projectData.city);
  let newurl = new URL(
    "https://pixabay.com/api/?key=" +
      process.env.PIXABAY_API +
      "&q=" +
      result +
      "&image_type=photo"
  );
  console.log(newurl);

  request({ url: newurl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error });
    }
    res.json(JSON.parse(body));
  });
});

app.get("/pixabaycountry", (req, res) => {
  let countryresult = encodeURIComponent(projectData.country);
  let newurl = new URL(
    "https://pixabay.com/api/?key=" +
      process.env.PIXABAY_API +
      "&q=" +
      countryresult +
      "&image_type=photo"
  );
  console.log(newurl);

  request({ url: newurl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error });
    }
    res.json(JSON.parse(body));
  });
});

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
});

//  POST
app.post("/geonames", (req, res) => {
  let city = req.body.a;
  console.log(city);
  let baseURL = `http://api.geonames.org/searchJSON?name=`;
  let newurl = new URL(
    baseURL + city + "&maxRows=1&type=json&username=" + process.env.USER_NAME
  );

  request({ url: newurl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error });
    }

    res.json(JSON.parse(body));
  });
});

app.post("/addcity", (req, res) => {
  console.log(`${typeof req.body} has reached server 'addcity' post function`);

  projectData.city = req.body.city;
  projectData.longitude = req.body.longitude;
  projectData.latitude = req.body.latitude;

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

  if (req.body.country == "United States") {
    projectData.statecode = req.body.statecode;
  } else {
    projectData.statecode = "";
  }

  projectData.country = req.body.country;
  projectData.temp = req.body.temp;
  projectData.descrip = req.body.descrip;

  res.send(projectData);
});

app.post("/forecastpost", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'forecastpost' post function`
  );

  if (req.body.country == "United States") {
    projectData.statecode = req.body.statecode;
  } else {
    projectData.statecode = "";
  }

  projectData.country = req.body.country;
  projectData.temp = req.body.temp;
  projectData.descrip = req.body.descrip;

  res.send(projectData);
});

app.post("/pixabaystate", (req, res) => {
  let stateresult = encodeURIComponent(req.body.a);
  let newurl = new URL(
    "https://pixabay.com/api/?key=" +
      process.env.PIXABAY_API +
      "&q=" +
      stateresult +
      "&image_type=photo"
  );

  request({ url: newurl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error });
    }
    res.json(JSON.parse(body));
  });
});

app.post("/imageurlpost", (req, res) => {
  console.log(
    `${typeof req.body} has reached server 'imageurlpost' post function`
  );

  projectData.imageurl = req.body;

  res.send(projectData.imageurl);
});