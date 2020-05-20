export function cityDataExtractor (data) {
    let long  = data.geonames[1];
    let lat = data.geonames[14];
    return {
        longitude: long,
        latitude: lat
    };
}