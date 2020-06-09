//  Fetch the data from the app endpoint
export async function getNewData() {
  let response = await fetch("http://localhost:3000/all");
  try {
    let projectData = await response.json();

    //  Debug test
    // for (let [key, value] of Object.entries(projectData)) {
    //   console.log(`${key}: ${value}`);
    // }

    return projectData;
  } catch (error) {
    console.log("Retrieval Error:", error);
  }
}
