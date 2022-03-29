// dom select grid items - DONE
// asynchronous Countdown timer, stop when variable turns true
// fetch JSON data, randomly assign to grid item - DONE
// When complete, put into separate files, import to app.js - DONE

// import assingGridItems from "./gridSelect.js"; // selects grids
// import timeTime from "./gridSelect.js";

import { assingGridItems, fetchData, hasBeenClick} from './gridSelect.js';
import timer from './timer.js';

const jsonLocation = '/griditems.json';
const jsonDemoLocation = 'demogriditem.json';

// const countdown = document.getElementById("countdown");
const timerButton = document.getElementById("timerButton");

let finished = false;

// var seconds = 0;
// var minutes = 0;

// let clockTimer = `${minutes} : ${seconds.toLocaleString(undefined, {minimumIntegerDigits:2})} min`;


timerButton.addEventListener("click", () => {
    let gridItemLocation = assingGridItems("grid-item1 grid-item2 grid-item3 grid-item4 grid-item5 grid-item6 grid-item7 grid-item8 grid-item9");
    
    //Fetch JSON and displays
    fetchData(jsonLocation, gridItemLocation);
    // setInterval(timer(minutes,seconds, 1000));
    setInterval(timer,1000);

    hasBeenClick(gridItemLocation);

    // countdown.innerHTML = clockTimer;
});









