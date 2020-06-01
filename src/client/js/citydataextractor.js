import { stringToNumber } from "./stringtonumconverter.js";

// export function cityDataExtractor(data) {
//     let long = stringToNumber(data.geonames[0].lng);
//     let lat = stringToNumber(data.geonames[0].lat);
//     let cityName = data.geonames[0].name;
//     let cityData = {
//         city: cityName,
//         longitude: long,
//         latitude: lat
//     };
//     //  Debug test
//     for (let [key, value] of Object.entries(cityData)) {
//         console.log(`${key}: ${value}`);
//     };

//     return cityData;
// }

export function cityDataExtractor(data) {
  return {
    city: data.geonames[0].name,
    longitude: stringToNumber(data.geonames[0].lng),
    latitude: stringToNumber(data.geonames[0].lat),
  };
}
