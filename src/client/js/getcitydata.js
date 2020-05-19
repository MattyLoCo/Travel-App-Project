//  Function to retrieve API weather data
export async function getCityData(url) {
    const response = await fetch(url);
    try {
      let newData = await response.json();
      console.log(`Successful Retrieval: ${JSON.stringify(newData)}`);
      return newData;
    } catch (error) {
      console.log("Retrieval Error:", error);
    }
}
