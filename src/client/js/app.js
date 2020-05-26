import { getCityData } from './getcitydata.js';
import { dateCountdown } from './countdown';
import { weatherBitAPI } from './weatherbitapi';

// Kick off app functions using promises
export function performAction(e) {
  getCityData()
  .then( dateCountdown() )
  .then( weatherBitAPI() )
  .catch((error) => {
    console.log("Total fail error", error);
  });
}