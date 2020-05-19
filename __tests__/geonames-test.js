async function getWeatherData(url) {
    username = process.env.USER_NAME
    url = `http://api.geonames.org/searchJSON?name=paris&maxRows=1&username=${username}`

    const response = await fetch(url);
    try {
      let newData = await response.json();
      console.log(`Successful Retrieval: ${JSON.stringify(newData)}`);
      return newData;
    } catch (error) {
      console.log("Retrieval Error:", error);
    }
}

test('the function gets back json from api fetch request', done => {
  function callback(data) {
    try {
      expect(getWeatherData).toReturn();
      done();
    } catch (error) {
      done(error);
    }
  }

  callback();
});

