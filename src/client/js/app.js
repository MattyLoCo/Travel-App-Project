import { getCityData } from './getcitydata.js';
import { dateCountdown } from './countdown.js';
import { weatherBitAPI } from './weatherbitapi';
import { getCityImage } from './getcityimage.js';
import { getNewData } from './getnewdata.js';
import { uiUpdate } from './uiupdate.js';

export async function performAction() {
    getCityData()
        .then(() => {
            return dateCountdown();
        })
        .then(() => {
            return getNewData();
        })
        .then((data) => {
            return weatherBitAPI(data);
        })
        .then(() => {
            return getNewData();
        })
        .then((data) => {
            return getCityImage(data);
        })    
        .then((imagedata) => {
            return uiUpdate(imagedata);
        })
        .catch((error) => {
            console.log(error);
        });
}
