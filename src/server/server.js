//  Create folder for private credentials
const dotenv = require('dotenv');
dotenv.config();

//  Setup empty JS object to act as endpoint for all routes
projectData = [];

//  Setup express server
const express = require('express');
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

//  Initialize the main project folder
app.use(express.static("dist"));

//  Setup Server
const port = process.env.PORT || 3000;

//  Callback console.log to debug
const server = app.listen(port, () => {
  return console.log(`Express server listening on port ${port}...`);
});

//  GET route
app.get('/all', sendData );

//  Callback function to complete GET '/all'
function sendData(request, response, next) {
  response.send(projectData);
};

//  POST route
app.post('/citydata', geonamesCall);

function geonamesCall(request, response) {
  let city = request.body;
  const baseURL = "http://api.geonames.org/searchJSON?name=";
  const username = process.env.USER_NAME;
  let url = `${baseURL}${city}&maxRows=1&type=json&username=${username}`;

  async function urlSubmit(url) {
    const reply = await fetch(url);
    try {
      const data = await reply.json();
      console.log(`Successful Post: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error("Post Error:", error);
    }
  }

  urlSubmit(url);
}

app.post('/add', addPost );

//  Callback function to complete POST '/add'
function addPost (req, res, next) {
  let newData = JSON.stringify(req.body);
  projectData.push(newData);

  //  Debug code console test
  console.log(newData);
  return res.send(newData);
};