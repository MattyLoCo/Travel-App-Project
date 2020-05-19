const dotenv = require('dotenv');
dotenv.config();

import { getCityData } from './js/getcitydata.js';
import { postCityData } from './js/postcitydata.js';
import { getNewData } from './js/getnewdata.js';
import { uiUpdate} from './js/uiupdate.js';
import { performAction } from './js/app.js';

import './styles/style.scss';

export { 
    getCityData, 
    postCityData, 
    getNewData, 
    uiUpdate,
    performAction 
};

// Add event listener
const button = document.getElementById("generate");
button.onclick = performAction;
