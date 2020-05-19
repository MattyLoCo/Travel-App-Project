import { getCityData } from './getcitydata.js';
import { postCityData } from './postcitydata.js';
import { getNewData } from './getnewdata.js';
import { uiUpdate} from './uiupdate.js';

// Kick off app functions using promises
export function performAction(e) {
  let city = document.getElementById("city").value;
  console.log(`${typeof city} ${city}`);

  getCityData('http://localhost:3000/citydata', city)
    .then((object) => {
      postCityData(`http://localhost:3000/add`, object)
    // })  
    // .then(() => {
    //   return getNewData("http://localhost:3000/all");      
    // })
    // .then((projectData) => {
    //   uiUpdate(projectData);
    })
    .catch((error) => {
      console.log("Total fail error", error);
    });
}