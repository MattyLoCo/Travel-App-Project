export function cityDataExtractor(data) {
    let long  = data.geonames[0].lng;
    let lat = data.geonames[0].lat;
    let cityData = {
        longitude: long,
        latitude: lat
    };    

    for (let [key, value] of Object.entries(cityData)) {
        console.log(`${key}: ${value}`);
    };    

    return cityData;
}