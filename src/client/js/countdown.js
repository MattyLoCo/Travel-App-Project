//  https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

export function dateCountdown(date) {
    let countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    return days;
}