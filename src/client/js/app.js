import { getCityData } from './getcitydata.js';
import { postWeatherData } from './postweatherdata.js';
import { getNewData } from './getnewdata.js';
import { uiUpdate} from './uiupdate.js';

// Kick off app functions using promises
export function performAction(e) {
  let city = document.getElementById("city").value;
  /* Global Variables */
  const username = "mattyloco";
  const baseURL = "http://api.geonames.org/searchJSON?name=";

  getCityData(`${baseURL}${city}&maxRows=1&type=json&username=${username}`)
    // .then(function createEntry(temperature) {
    //   let feelings = document.getElementById("feelings").value;
    //   //  Debug test
    //   console.log(feelings);
    //   let object = {
    //     date: newDate,
    //     temp: `${temperature} degrees Fahrenheit`,
    //     content: feelings
    //   };
    //   //  Debug test
    //   console.log(JSON.stringify(object));
    //   return object;
    // })
    // .then((object) => {
    //   postWeatherData("http://localhost:3000/add", object)
    // })  
    // .then(() => {
    //   return getNewData("http://localhost:3000/all");      
    // })
    // .then((projectData) => {
    //   uiUpdate(projectData);
    // })
    .catch((error) => {
      console.log("Total fail error", error);
    });
}