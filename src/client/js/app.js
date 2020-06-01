import { getCityData } from "./getcitydata.js";
import { dateCountdown } from "./countdown";
import { weatherBitAPI } from "./weatherbitapi";

export async function performAction(e) {
  getCityData()
    .then(() => {
      return dateCountdown();
    })
    .then(() => {
      return weatherBitAPI();
    })
    .catch((error) => {
      console.log(error);
    });
}
