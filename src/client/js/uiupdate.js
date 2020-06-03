import { dateCountdown } from "./countdown";

const datediv = document.getElementById("date");
const weatherdiv = document.getElementById("temp");
// const contentdiv = document.getElementById("content");
// const enddiv = document.getElementById("end");

export async function uiUpdate() {
  let response = await fetch('http://localhost:3000/all');

  try {
    let data = await response.json();

    // Set background image from local storage
    document.getElementById(
      "citypic"
    ).style.backgroundImage = `url('/images/${data.city}').png`;

    // Create date block
    let dateheader = document.createElement("p");
    let dateheadertext = document.createTextNode("Travel Date Info");
    dateheader.appendChild(dateheadertext);
    dateheader.className = "title";
    datediv.appendChild(dateheader);

    let datepara = document.createElement("p");
    let dateparatext = document.createTextNode(
      `${data.dates[1]} days remaining until you leave on ${data.dates[0]}`
    );
    datepara.appendChild(dateparatext);
    datediv.appendChild(datepara);

    // Create weather block
    let weatherheader = document.createElement("p");
    let weatherheadtext = document.createTextNode("Destination Weather Info");
    weatherheader.appendChild(weatherheadtext);
    weatherheader.className = "title";
    weatherdiv.appendChild(weatherheader);

    let weatherpara = document.createElement("p");

    // Determine weather report based on travel date
    if (dateCountdown() === false) {
      weatherpara.innerHTML = `The forecast for ${data.city} in two weeks is ${data.descrip} at ${data.temp}`;
    } else {
      weatherpara.innerHTML = `The current forecast for ${data.city} is ${data.descrip} at ${data.temp}`;
    }

    weatherdiv.appendChild(weatherpara);
  } catch (error) {
    console.log(error);
  }
}
