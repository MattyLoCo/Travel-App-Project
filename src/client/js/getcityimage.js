import { localServerPost } from "./localserverpost";
import { getNewData } from './getnewdata';

const pixablykey = "16829835-98777d95523cd749144425052";
let city;

export async function getCityImage() {
  let data = await getNewData();
  city = data.city;  
  try {
    let result = encodeURIComponent(city);
    console.log("encodeURIComponent result", result)
    let url = `https://pixabay.com/api/?key=${pixablykey}&q=${result}&image_type=photo&editors_choice=true&safesearch=true`;

    let response = await fetch(url);
    try {        
      let imageinfo = await response.json();
      console.log("image api response", imageinfo);
      let imageobject = {
          'url': imageinfo.hits[0].webformatURL,
          'qstring': city  
      };  
      // Debug test
      console.log(`${typeof imageobject} ${imageobject}`);
          
      await localServerPost("http://localhost:3000/imageurlpost", imageobject);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
