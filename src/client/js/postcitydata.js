//  Function to post city data
export async function postCityData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    try {
      const postData = await response.json();
      console.log(`Successful Post: ${JSON.stringify(postData)}`);
    } catch (error) {
      console.error("Post Error:", error);
    }
}