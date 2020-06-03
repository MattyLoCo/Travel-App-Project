import { localServerPost } from "./localserverpost";
import { getFullStateName } from "./statecodeconverter";

const pixablykey = "16829835-98777d95523cd749144425052";
let city;
let country;
let stateabbr;

export async function getCityImage(data) {
  console.log("getCityImage data " + data);

  city = data.city;
  country = data.country;
  stateabbr = data.statecode;

  let result = encodeURIComponent(city);
  console.log("encodeURIComponent result", result);

  let url = `https://pixabay.com/api/?key=${pixablykey}\
  &q=${result}&image_type=photo&editors_choice=true&safesearch=true`;

  // GET request from Pixabay
  let response = await fetch(url);
  try {
    let imageinfo = await response.json();

    console.log("image api response", imageinfo);

    if (imageinfo.totalHits == 0) {
      if (country == "United States") {
        let fullname = getFullStateName(stateabbr);
        console.log(fullname);

        let stateresult = encodeURIComponent(fullname);
        console.log(stateresult);

        let stateurl = `https://pixabay.com/api/?key=${pixablykey}&\
        q=${stateresult}&image_type=photo&editors_choice=true&safesearch=true`;

        // GET request in the case that the city is in the US
        let stateresponse = await fetch(stateurl);
        try {
          let stateimage = await stateresponse.json();
          console.log(stateimage);

          let stateimageobject = {
            'url': stateimage.hits[0].webformatURL,
            'qstring': fullname,
          };
          await localServerPost(
            "http://localhost:3000/imageurlpost",
            stateimageobject
          );
          console.log("stateimageobject sent to imageurlpost");
        } catch (error) {
          console.log(error);
        }
      } else {
        let countryresult = encodeURIComponent(country);
        console.log(`encoded Country ${countryresult}`);
        let countryurl = `https://pixabay.com/api/?key=${pixablykey}\
        &q=${countryresult}&image_type=photo&editors_choice=true&safesearch=true`;

        let countryresponse = await fetch(countryurl);
        try {
          let countryimage = await countryresponse.json();
          let countryimageobject = {
            'url': countryimage.hits[0].webformatURL,
            'qstring': country,
          };
          await localServerPost(
            "http://localhost:3000/imageurlpost",
            countryimageobject
          );
          console.log("countryimageobject sent to imageurlpost");
        } catch (error) {
          console.log(error);
        }
      }
      try {
        let imageobject = {
          'url': imageinfo.hits[0].webformatURL,
          'qstring': city,
        };
        console.log(`${typeof imageobject} ${imageobject}`);

        await localServerPost(
          "http://localhost:3000/imageurlpost",
          imageobject
        );
        console.log("imageobject sent to imageurlpost");
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}