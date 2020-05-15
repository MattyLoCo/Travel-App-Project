//  Fetch the data from the app endpoint
const getNewData = async (url = "") => {
    const response = await fetch(url);
    try {
      const projectData = await response.json();
      console.log(`Successful Retrieval: ${projectData}`);
      return projectData;
    } catch (error) {
      console.log("Retrieval Error:", error);
    }
  };

export { getNewData };  