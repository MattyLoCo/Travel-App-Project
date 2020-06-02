import { localServerPost } from "./localserverpost";
import { getNewData } from "./getnewdata.js";
import { weatherFetch } from "./weatherfetch.js";
import { dateCountdown } from "./countdown";

export async function weatherBitAPI() {
  let data = await getNewData();
  try {
    let lat = data.latitude;
    let long = data.longitude;

    console.log(`Latitude ${lat} longitude ${long}`);

    const API_KEY = "ed272d7050954d248e5c7d3f9dd80768";
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&units=I&key=${API_KEY}`;

    try {
      let fetchData = await weatherFetch(url);
      console.log("fetchData", fetchData);
      let dateCountdownResult = await dateCountdown();
      console.log("dateCountdownResult", dateCountdownResult);
      if (dateCountdownResult === false) {
        console.log(typeof fetchData + fetchData + ' has reached the beginning of localserverpost "forecastpost"');  
        await localServerPost("http://localhost:3000/forecastpost", fetchData);
      } else {
        console.log(typeof fetchData + 'has reached the beginning of localserverpost "weatherpost"');
        await localServerPost("http://localhost:3000/weatherpost", fetchData);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
