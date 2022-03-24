// dom select grid items
// asynchronous Countdown timer, stop when variable turns true
// fetch JSON data, randomly assign to grid item
// When complete, put into separate files, import to app.js


let jsonLocation = '/griditems.json';
const countdown = document.getElementById("countdown");
const timerButton = document.getElementById("timerButton");

var finished = false;
let clock = document.getElementById("countdown");
let timer = 0;

// Select each grid-item and save into array
function assingGridItems(idElement) {
    var idList = idElement.split(" ");
    var results = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            results.push(item);
        }
    }
    return(results);
}

let results = assingGridItems("grid-item1 grid-item2 grid-item3 grid-item4 grid-item5 grid-item6 grid-item7 grid-item8 grid-item9");

console.log(results[0]);

function countdownTimer(){
    if (finished == true){
        return
    } else {
        clock.innerText = timer;
        timer++;
    }
}

timerButton.addEventListener("click", () => {finished = true});

function timeTime(){

    setInterval(countdownTimer, 1000);
    
    let randomNumber = Math.floor(Math.random() * 9);
    console.log(randomNumber);
    // Check that random number hasn't already been produced, if it has then rerun random

    fetch(jsonLocation)
    .then(res => res.json())
    .then(data => {

        console.log(Object.entries(data));

        //use values
        console.log(Object.values(data[0]) );

        for (let [key, value] of Object.entries(data[0])) {
            console.log(`${key} is for ${value}`);
        }

        // for(let i = 0; i < 9; i++) {
        //     results[randomNumber].innerText = data[0].element2;
        // }

        results[0].innerText = data[Object.values[0]];
        results[1].innerText = data[0].element2;
        results[2].innerText = data[0];
        results[3].innerText = data[0].scope;
        results[4].innerText = data[0].higherOrderFunc;
        results[5].innerText = data[0].destructingObjects;
        results[6].innerText = data[0].recursion;
        results[7].innerText = data[0].classes;
        results[8].innerText = data[0].modules;
    });

}



timeTime();