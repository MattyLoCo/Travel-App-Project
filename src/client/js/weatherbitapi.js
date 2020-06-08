import { localServerPost } from "./localserverpost";
import { dateCountdown } from "./countdown";
import { getCountryName } from "./ISOconvert";

export async function weatherBitAPI() {
  try {    
    
    try {
      let fetchData = await fetch('http://localhost:3000/weatherbit');
      console.log("fetchData", fetchData);

      let country = getCountryName(fetchData.country_code);
      let futureWeatherData = {
        'country': country,
        'statecode': fetchData.state_code,
        'temp': fetchData.data[15].temp,
        'descrip': fetchData.data[15].weather.description
      };
      let currentWeatherData = {
        'country': country,
        'statecode': fetchData.state_code,
        'temp': fetchData.data[0].temp,
        'descrip': fetchData.data[0].weather.description
      };

      let dateCountdownResult = await dateCountdown();
      console.log("dateCountdownResult", dateCountdownResult);

      if (dateCountdownResult === false) {
        console.log(typeof fetchData + fetchData + ' has reached the beginning of localserverpost "forecastpost"');  
        await localServerPost("http://localhost:3000/forecastpost", futureWeatherData);
      } else {
        console.log(typeof fetchData + 'has reached the beginning of localserverpost "weatherpost"');
        await localServerPost("http://localhost:3000/weatherpost", currentWeatherData);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
