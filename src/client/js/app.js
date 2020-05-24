import { getCityData } from './getcitydata.js';
import { dateCountdown } from './countdown';
import { localServerPost } from './localserverpost.js';
import { getNewData } from './getnewdata.js';
import { uiUpdate} from './uiupdate.js';

// Kick off app functions using promises
export function performAction(e) {
  getCityData()
  .then( dateCountdown() )
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