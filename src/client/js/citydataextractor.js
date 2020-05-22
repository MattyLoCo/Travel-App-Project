export function cityDataExtractor(data) {
    let long  = data.geonames[0].lng;
    let lat = data.geonames[0].lat;
    let cityName = data.geonames[0].name;
    let cityData = {
        city: cityName,
        longitude: long,
        latitude: lat
    };    
    //  Debug test
    for (let [key, value] of Object.entries(cityData)) {
        console.log(`${key}: ${value}`);
    };    

    return cityData;
}