import { cityDataExtractor } from './citydataextractor';

//  Function to retrieve API weather data
export async function getCityData() {
    const baseURL = "http://api.geonames.org/searchJSON?name=";  
    let city = document.getElementById("city").value;
    const username = "mattyloco";    
    let url = `${baseURL}${city}&maxRows=1&type=json&username=${username}`

    const response = await fetch(url);
    try {
      let data = await response.json();      
      let newData = cityDataExtractor(data);
      console.log(`Successful Retrieval: ${JSON.stringify(newData)}`);
      return newData;
    } catch (error) {
      console.log("Retrieval Error:", error);
    }
}
