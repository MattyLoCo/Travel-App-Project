import { stringToNumber } from "./stringtonumconverter.js";

export function cityDataExtractor(data) {
  return {
    city: data.geonames[0].name,
    longitude: stringToNumber(data.geonames[0].lng),
    latitude: stringToNumber(data.geonames[0].lat),
  };
}
