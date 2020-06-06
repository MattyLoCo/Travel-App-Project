import { cityDataExtractor } from "./citydataextractor";
import { localServerPost } from "./localserverpost";

//  Function to retrieve API weather data
export async function getCityData() {
  let city = document.getElementById("city").value;
  console.log(typeof city, city)
  
  let response = await fetch("http://localhost:3000/geonames", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(city)
  });

  try {
    let data = await response.json();
    console.log(typeof data, data)
    let newData = cityDataExtractor(data);
    
    console.log("newData", newData);        

    await localServerPost("http://localhost:3000/addcity", newData);

    return newData;
  } catch (error) {
    console.log("Retrieval ", error);
  }
}