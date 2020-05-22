//  Create private folder for private credentials
const dotenv = require("dotenv");
dotenv.config();

//  JS object to act as endpoint for routes
projectData = {
  city: "",
  longitude: "",
  latitude: "",
  dates: ""
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

function sendData(request, response, next) {
  response.send(projectData);
};


//  POST 
app.post('/addcity', (req, res) => {
  // let string = JSON.stringify(req.body);
  // let postCity = string.replace(/[^a-zA-Z0-9]/g, '');
  // console.log(postCity);

  //  Debug code console test
  for (let [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
  };
  console.log(`${typeof req.body} has reached server post function`);

  let postCity = req.body.city;
  let long = req.body.longitude;
  let lat = req.body.latitude;

  projectData = {
    city: postCity,
    longitude: long,
    latitude: lat,
    dates: ""
  };
  
  res.send(projectData);
});