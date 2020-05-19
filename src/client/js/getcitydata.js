//  Function to retrieve API weather data
export async function getCityData(url, text) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        "content-type": "text/plain"
      },
      body: text
    });
    try {
      let newData = await response.json();
      console.log(`Successful Retrieval: ${JSON.stringify(newData)}`);
      return newData;
    } catch (error) {
      console.log("Retrieval Error:", error);
      alert(`City not found. Please check spelling of your entry.`);
    }
}