// define timer
// run event when clicked which begins count
// calls method to allow bingo to start

// stop clock when user has clicked all 9 grids, this
// will trigger pop up which shows time

// can't use arrow function
// export timer() => {

// } 

// // can only have one default export

// const countdown = document.getElementById("countdown");
// var seconds = 0;
// var minutes = 0;

const countdown = document.getElementById("countdown");

var seconds = 0;
var minutes = 0;

export default function timer(){
    seconds++;
    if(seconds == 60 ){
        seconds = 0;
        minutes++;
    }
    
    countdown.innerText = `${minutes} : ${seconds.toLocaleString(undefined, {minimumIntegerDigits:2})} min`;
    
};


// let clockTimer = `${minutes} : ${seconds.toLocaleString(undefined, {minimumIntegerDigits:2})} min`;
// window.setInterval(timer,1000);
