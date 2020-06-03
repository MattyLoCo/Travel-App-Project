import { getCityData } from "./js/getcitydata.js";
import { getNewData } from "./js/getnewdata.js";
import { uiUpdate } from "./js/uiupdate.js";
import { performAction } from "./js/app.js";
import { cityDataExtractor } from "./js/citydataextractor";
import { dateCountdown } from "./js/countdown";
import { validateDateForm } from "./js/datevalidator";
import { getCityImage } from "./js/getcityimage";
import { getCountryName } from "./js/ISOconvert";
import { localServerPost } from "./js/localserverpost";
import { getFullStateName } from "./js/statecodeconverter";
import { stringToNumber } from "./js/stringtonumconverter";
import { weatherBitAPI } from "./js/weatherbitapi";
import { weatherFetch } from "./js/weatherfetch";
import "./styles/style.scss";

export {
  getCityData,
  getNewData,
  uiUpdate,
  performAction,
  cityDataExtractor,
  dateCountdown,
  validateDateForm,
  getCityImage,
  getCountryName,
  localServerPost,
  getFullStateName,
  stringToNumber,
  weatherBitAPI,
  weatherFetch
};

// Add event listener
const button = document.getElementById("generate");
button.onclick = performAction;
