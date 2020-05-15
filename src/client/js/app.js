import { getWeatherData } from './js/getWeatherData.js';
import { postWeatherData } from './js/postWeatherData.js';
import { getNewData } from './js/getNewData.js';
import { uiUpdate} from './js/uiupdate.js';

/* Global Variables */
const ApiKey = "91b0b55d837ff53bcd4a0c367014bd60";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

/* Helper Functions */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear();

// Kick off app functions using promises
export function performAction(e) {
  let zip = document.getElementById("zip").value;

  getWeatherData(`${baseURL}${zip}&units=imperial&appid=${ApiKey}`)
    .then(function getTemp(newData) {
      let temperature = newData.main.temp;
      //  Debug test
      console.log(`temp is ${temperature} Fahrenheit`);
      return temperature;
    })
    .then(function createEntry(temperature) {
      let feelings = document.getElementById("feelings").value;
      //  Debug test
      console.log(feelings);
      let object = {
        date: newDate,
        temp: `${temperature} degrees Fahrenheit`,
        content: feelings
      };
      //  Debug test
      console.log(JSON.stringify(object));
      return object;
    })
    .then((object) => {
      postWeatherData("http://localhost:3000/add", object)
    })  
    .then(() => {
      return getNewData("http://localhost:3000/all");      
    })
    .then((projectData) => {
      uiUpdate(projectData);
    })
    .catch((error) => {
      console.log("Total fail error", error);
    });
}