import { getCityData } from './getcitydata.js';
import { localServerPost } from './localserverpost.js';
import { getNewData } from './getnewdata.js';
import { uiUpdate} from './uiupdate.js';

// Kick off app functions using promises
export function performAction(e) {
  getCityData()
  // .then((object) => {
  //   localServerPost("http://localhost:3000/addcity", object)
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