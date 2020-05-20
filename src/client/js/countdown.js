//  https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

export function dateCountdown() {
    let travelDate = getElementsById('traveldate').value;
    let countDownDate = new Date(travelDate).getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;    

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("date").innerHTML = "";
        document.getElementById("end").innerHTML = "Pack Your Bags!!";
    } else {
        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        return days;
    }
}