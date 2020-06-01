import { cityDataExtractor } from "./citydataextractor";
import { localServerPost } from "./localserverpost";

const baseURL = "http://api.geonames.org/searchJSON?name=";
const username = "mattyloco";

//  Function to retrieve API weather data
export async function getCityData() {
  let city = document.getElementById("city").value;
  let url = `${baseURL}${city}&maxRows=1&type=json&username=${username}`;

  const response = await fetch(url);
  try {
    let data = await response.json();
    let newData = cityDataExtractor(data);
    //IF YOU WANT
    console.log("newData", newData);
    //
    console.log(`${city} coordinates: ${JSON.stringify(newData)}`);

    await localServerPost("http://localhost:3000/addcity", newData);

    return newData;
  } catch (error) {
    console.log("Retrieval Error:", error);
  }
}
