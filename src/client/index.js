import { getCityData } from "./js/getcitydata.js";
import { getNewData } from "./js/getnewdata.js";
import { uiUpdate } from "./js/uiupdate.js";
import { performAction } from "./js/app.js";
import "./styles/style.scss";

export { getCityData, getNewData, uiUpdate, performAction };

// Add event listener
const button = document.getElementById("generate");
button.onclick = performAction;
