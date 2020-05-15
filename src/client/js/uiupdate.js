//  Update UI with fetched data from projectData 
const uiUpdate = function(data) {
  
    let newArray = JSON.parse(data);
    let date = newArray.date;
    let temp = newArray.temp;
    let content = newArray.content;
    //  Debug check  
    console.log(`newArray is a ${typeof newArray}`);
    
    document.getElementById("date").innerHTML = `The date is ${date}.`;
    document.getElementById("temp").innerHTML = `The current temperature is ${temp}.`;
    document.getElementById("content").innerHTML = `You're feeling ${content}.`;
  };

export { uiUpdate };