// dom select grid items
// asynchronous Countdown timer, stop when variable turns true
// fetch JSON data, randomly assign to grid item
// When complete, put into separate files, import to app.js

import assingGridItems from "./gridSelect.js"; // selects grids
import timeTime from "./countdown.js";


let jsonLocation = '/griditems.json';
const countdown = document.getElementById("countdown");
const timerButton = document.getElementById("timerButton");

var finished = false;
let clock = document.getElementById("countdown");

timerButton.addEventListener("click", () => {

    let gridItemLocation = assingGridItems("grid-item1 grid-item2 grid-item3 grid-item4 grid-item5 grid-item6 grid-item7 grid-item8 grid-item9");
    timeTime(jsonLocation, gridItemLocation);
});

//Fetch JSON and displays





