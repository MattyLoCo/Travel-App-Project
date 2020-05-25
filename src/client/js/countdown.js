//  Modified from https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
import { localServerPost } from './localserverpost';
import { validateDateForm } from './datevalidator';

export function dateCountdown() {
    let travelDate = document.getElementById('traveldate').value;    
    let countDownDate = new Date(travelDate).getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now; 

    if (validateDateForm() === true) {        
        console.log(travelDate);
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("date").innerHTML = "0";
            document.getElementById("end").innerHTML = "Pack Your Bags!!";            
        } else {
            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));        
            let dates = [travelDate, days];
    
            localServerPost('http://localhost:3000/traveldate', dates);
            
            console.log(dates);
            return dates;       
        }
    } else {
        console.log("Date entered by user was not a valid form YYYY-MM-DD")
    }       
   
}