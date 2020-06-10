import { localServerPost } from './localserverpost';
import { validateDateForm } from './datevalidator';

export async function dateCountdown() {
    let travelDate = await document.getElementById('traveldate').value;
    let countDownDate = new Date(travelDate).getTime(); 
    let now = new Date().getTime(); 
    let timeleft = countDownDate - now; 
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let dates = [travelDate, days];

    if (validateDateForm() === true) {    
        if (days == 0) {            
            document.getElementById('end').innerHTML = 'Pack Your Bags!!';
            dates.push('true');      
            console.log(dates);
            await localServerPost('http://localhost:3000/traveldate', dates);
            return true;
        } else if (0 < days && days < 7) {
            dates.push('true');
            console.log(dates);
            await localServerPost('http://localhost:3000/traveldate', dates);            
            return true;
        } else {
            dates.push('false');
            console.log(dates);
            await localServerPost('http://localhost:3000/traveldate', dates);            
            return false;
        }
    } else {
        console.log('User did not enter a valid date in form YYYY-MM-DD');
        let clearDates = '';
        localServerPost('http://localhost:3000/traveldate', clearDates);    
    }
}
