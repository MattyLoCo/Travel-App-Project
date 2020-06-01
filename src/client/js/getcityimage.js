import { localServerPost } from "./localserverpost";

const pixablykey = "16829835-98777d95523cd749144425052";

export async function getCityImage() {
  let data = await getNewData("http://localhost:3000/all");
  try {
    let result = encodeURIComponent(data.city);
    let url = `https://pixabay.com/api/?key=${pixablykey}&q=${result}&image_type=photo&editors_choice=true&safesearch=true`;

    let image = await fetch(url);
    try {
      let data = image.json();
      let imageurl = data.hits.webformatURL;

      await localServerPost("http://localhost:3000/imageurlpost", imageurl);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
