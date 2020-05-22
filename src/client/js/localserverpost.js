export async function localServerPost(url, data) {
    // console.log(`Inside the localserverpost function ${data} is ${typeof data}`);
    for (let [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }; 
    console.log(`Inside the localserverpost function ${url} is ${typeof url}`);

    let response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    try {
      let newData = await response.json();
      console.log(`${JSON.stringify(newData)}`);
    } catch (error) {
      console.log(error);
    };
}