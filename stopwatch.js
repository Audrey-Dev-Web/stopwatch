let seconds = 00;
let tens = 00;
let minutes = 00;
let hours = 00;

let Interval;

// BUTTONS
const start = document.getElementsByClassName("start");
const stop = document.getElementsByClassName("stop");
const reset = document.getElementsByClassName("reset");

// CHRONO
const minutesTimer = document.getElementById("minutes");
const hoursTimer = document.getElementById("hours");
const tensTimer = document.getElementById("tens");
const secondsTimer = document.getElementById("seconds");

start[0].addEventListener("click", () => {
    Interval = setInterval(startTimer, 10);
});

stop[0].addEventListener("click", () => {
    clearInterval(Interval);
});

reset[0].addEventListener("click", () => {
    clearInterval(Interval);
    hours = 00;
    minutes = 00;
    tens = 00;
    seconds = 00;

    hoursTimer.innerHTML = "0" + hours;
    minutesTimer.innerHTML = "0" + minutes;
    tensTimer.innerHTML = "0" + tens;
    secondsTimer.innerHTML = "0" + seconds;
});

startTimer = () => {
    seconds++;
    // console.log(seconds);

    if (seconds <= 9) {
        secondsTimer.innerHTML = `0${seconds}`;
    }

    if (seconds > 9) {
        secondsTimer.innerHTML = seconds;
    }

    if (seconds > 99) {
        tens++;
        tensTimer.innerHTML = "0" + tens;
        secondsTimer.innerHTML = "00";
        seconds = 0;
    }

    if (tens > 9) {
        tensTimer.innerHTML = tens;
    }

    if (tens > 59) {
        minutes++;
        minutesTimer.innerHTML = "0" + minutes;
        tensTimer.innerHTML = "00";
        tens = 0;
    }

    if (minutes <= 9) {
        minutesTimer.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
        minutesTimer.innerHTML = minutes;
    }

    if (minutes > 59) {
        hours++;
        hoursTimer.innerHTML = "0" + hours;
        minutesTimer.innerHTML = "00";
        minutes = 0;
    }

    if (hours <= 9) {
        hoursTimer.innerHTML = "0" + hours;
    }

    if (hours > 9) {
        hoursTimer.innerHTML = hours;
    }
};
