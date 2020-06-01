export async function weatherFetch(url) {
  let response = await fetch(url);
  try {
    let weatherData = await response.json();

    //  Debug test
    for (let [key, value] of Object.entries(weatherData)) {
      console.log(`${key}: ${value}`);
    }
    console.log(`${typeof weatherData}`);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
