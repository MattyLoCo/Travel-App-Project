import { localServerPost } from './localserverpost';
import { validateDateForm } from './datevalidator';

export async function dateCountdown() {
    let travelDate = await document.getElementById('traveldate').value;    
    let countDownDate = new Date(travelDate).getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now; 

    if (validateDateForm() === true) {        
        console.log(travelDate);
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("date").innerHTML = "0";
            document.getElementById("end").innerHTML = "Pack Your Bags!!";
            return true;
        } else if (0 < timeleft < 7) {
            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));        
            let dates = [travelDate, days];

            await localServerPost('http://localhost:3000/traveldate', dates);
            
            console.log(dates);
            return true;        
        } else {
            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));        
            let dates = [travelDate, days];
    
            await localServerPost('http://localhost:3000/traveldate', dates);
            
            console.log(dates);
            return false;       
        }
    } else {
        console.log("User did not enter a valid date in form YYYY-MM-DD")

        let clearDates = "";
        localServerPost('http://localhost:3000/traveldate', clearDates);
    }       
}    