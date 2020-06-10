import { localServerPost } from './localserverpost';
import { getCountryName } from './ISOconvert';

export async function weatherBitAPI(data) {
    let response = await fetch('http://localhost:3000/weatherbit');
    console.log('weatherbit data: ', response);
    try {
        let fetchData = await response.json();
        console.log('fetchData', fetchData);      

        let country = getCountryName(fetchData.country_code);
        let futureWeatherData = {
            country: country,
            statecode: fetchData.state_code,
            temp: fetchData.data[15].temp,
            descrip: fetchData.data[15].weather.description
        };
        let currentWeatherData = {
            country: country,
            statecode: fetchData.state_code,
            temp: fetchData.data[0].temp,
            descrip: fetchData.data[0].weather.description
        };      
        
        if (data.dates[2] == 'false') {
            console.log(typeof futureWeatherData + futureWeatherData + ' has reached the beginning of localserverpost "forecastpost"');  
            await localServerPost('http://localhost:3000/forecastpost', futureWeatherData);
        } else {
            console.log(typeof currentWeatherData + 'has reached the beginning of localserverpost "weatherpost"');
            await localServerPost('http://localhost:3000/weatherpost', currentWeatherData);
        }      
    } catch (error) {
        console.log(error);
    }
} 

