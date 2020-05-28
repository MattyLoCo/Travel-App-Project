import { localServerPost } from './localserverpost';
import { getNewData } from './getnewdata.js';
import { weatherFetch } from './weatherfetch.js';

export async function weatherBitAPI() {    
    let response = await getNewData('http://localhost:3000/all');
    try {
        let data = await response.json();
        let lat = data.latitude;
        let long = data.longitude;
    
        console.log(`Latitude ${lat} longitude ${long}`);
    
        const API_KEY = "ed272d7050954d248e5c7d3f9dd80768";
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${API_KEY}`;
        
        let fetchData = await weatherFetch(url);
    
        await localServerPost('http://localhost:3000/weatherpost', fetchData);
    } catch(error) {
        console.log(error);
    }
}   
