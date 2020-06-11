import { localServerPost } from './localserverpost';
import { getFullStateName } from './statecodeconverter';

let city;
let country;
let stateabbr;

export async function getCityImage(data) {
    city = data.city;
    country = data.country;
    stateabbr = data.statecode;

    // GET request from Pixabay
    let response = await fetch('http://localhost:3000/pixabay');
    try {
        let imageinfo = await response.json();
        console.log('image api response', imageinfo);

        if (imageinfo.totalHits == 0 && country == 'United States') {
            let fullname = getFullStateName(stateabbr);
            console.log(fullname);

            let stateresult = { a: fullname };

            // In the case that the city is in the US
            try {
                let stateresponse = await localServerPost(
                    'http://localhost:3000/pixabaystate',
                    stateresult
                );
                let stateimage = await stateresponse.json();
                console.log(stateimage);

                let stateimageobject = {
                    url: stateimage.hits[0].webformatURL,
                    qstring: fullname,
                };
                let statepostres = await localServerPost(
                    'http://localhost:3000/imageurlpost',
                    stateimageobject
                );
                console.log('stateimageobject sent to imageurlpost');
                let statepostpath = await statepostres.json();
                return stateimageobject.url;
            } catch (error) {
                console.log(error);
            }
        } else if (imageinfo.totalHits == 0 && country != 'United States') {
            console.log(country);

            // If city has 0 hits and is NOT a US city
            try {
                let countryresponse = await fetch(
                    'http://localhost:3000/pixabaycountry'
                );
                let countryimage = await countryresponse.json();
                let countryimageobject = {
                    url: countryimage.hits[0].webformatURL,
                    qstring: country,
                };
                let countrypostres = await localServerPost(
                    'http://localhost:3000/imageurlpost',
                    countryimageobject
                );
                console.log('countryimageobject sent to imageurlpost');
                let countrypostpath = await countrypostres.json();
                return countryimageobject.url;
            } catch (error) {
                console.log(error);
            }
        } else {
            let imageobject = {
                url: imageinfo.hits[0].webformatURL,
                qstring: city,
            };
            console.log(`${typeof imageobject} ${imageobject}`);

            try {
                await localServerPost(
                    'http://localhost:3000/imageurlpost',
                    imageobject
                );
                console.log('imageobject sent to imageurlpost');
                return imageobject.url;
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
