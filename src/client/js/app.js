import { getCityData } from "./getcitydata.js";
import { dateCountdown } from "./countdown";
import { weatherBitAPI } from "./weatherbitapi";
import { getCityImage } from "./getcityimage.js";
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
      return getCityImage();
    })
    .then(() => {
      return uiUpdate();
    })
    .catch((error) => {
      console.log(error);
    });
}
