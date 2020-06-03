import { getCityData } from "./getcitydata.js";
import { dateCountdown } from "./countdown.js";
import { weatherBitAPI } from "./weatherbitapi";
import { getCityImage } from "./getcityimage.js";
import { getNewData } from "./getnewdata.js";
import { uiUpdate } from "./uiupdate.js";

export async function performAction(e) {
  getCityData()
    .then(() => {
      return dateCountdown();
    })
    .then(() => {
      return weatherBitAPI();
    })
    .then(() => {
      return getNewData()
    })
    .then((data) => {
      getCityImage(data);
    })    
    .then(() => {
      uiUpdate();
    })
    .catch((error) => {
      console.log(error);
    });
}
