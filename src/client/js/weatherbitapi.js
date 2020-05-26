import { localServerPost } from './localserverpost';
import { getNewData } from './getnewdata.js';

export function weatherBitAPI() {    
    getNewData('http://localhost:3000/all')
    .then(data => {
        let lat = data.latitude;
        let long = data.longitude;
        const API_KEY = ed272d7050954d248e5c7d3f9dd80768;
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&long=${long}&key=${API_KEY}`;
        
        async function weatherFetch() {
            await fetch(url);
            try {
                let weatherData = await response.json();
                return weatherData;
            } catch {
                console.log(error);
            }            
        }
        weatherFetch();
    })    
    .then(weatherData => {
        localServerPost('http://localhost:3000/weatherpost', weatherData);
    })
    .catch(error => {
        console.log(error);
    })
}   
