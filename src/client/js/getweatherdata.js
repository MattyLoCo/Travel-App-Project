//  Function to retrieve API weather data
async function getWeatherData(url) {
    const response = await fetch(url);
    try {
      let newData = await response.json();
      console.log(`Successful Retrieval: ${JSON.stringify(newData)}`);
      return newData;
    } catch (error) {
      console.log("Retrieval Error:", error);
    }
}

export { getWeatherData };