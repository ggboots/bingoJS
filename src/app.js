// dom select grid items
// asynchronous Countdown timer, stop when variable turns true
// fetch JSON data, randomly assign to grid item
// When complete, put into separate files, import to app.js

let jsonLocation = '/griditems.json';
// Dry code - temp
let gridItem1 = document.getElementById('grid-item1');
let gridItem2 = document.getElementById('grid-item2');
let gridItem3 = document.getElementById('grid-item3');
let gridItem4 = document.getElementById('grid-item4');
let gridItem5 = document.getElementById('grid-item5');
let gridItem6 = document.getElementById('grid-item6');
let gridItem7 = document.getElementById('grid-item7');
let gridItem8 = document.getElementById('grid-item8');
let gridItem9 = document.getElementById('grid-item9');

const countdown = document.getElementById("countdown");
const timerButton = document.getElementById("timerButton");

timerButton.addEventListener("click", () => {finished = true});


(function(){
    for (i = 0; i < 10; i++){
        let gridItem = document.getElementById(`grid-item[${i}]`);
        // typeof(gridItem);
        console.log(gridItem);
    }
})();

// function assingGridItems(idElement) {
//     var idList = idElement.split(" ");
//     var results = [], item;
//     for (var i = 0; i < idList.length; i++) {
//         item = document.getElementById(idList[i]);
//         if (item) {
//             results.push(item);
//         }
//     }
//     return(results);
// }

// let gridItem = assingGridItems("grid-item1");





function countdownTimer(){
    if (finished == true){
        return
    } else {
        clock.innerText = timer;
        timer++;
    }
}

var finished = false;
let clock = document.getElementById("countdown");
let timer = 0;

function timeTime(){

    setInterval(countdownTimer, 1000);
    
    
    fetch(jsonLocation)
    .then(res => res.json())
    .then(data => {
        gridItem1.innerText = data[0].templateLiteral;
        gridItem2.innerText = data[0].includes;
        gridItem3.innerText = data[0].spreadOperator;
        gridItem4.innerText = data[0].scope;
        gridItem5.innerText = data[0].higherOrderFunc;
        gridItem6.innerText = data[0].destructingObjects;
        gridItem7.innerText = data[0].recursion;
        gridItem8.innerText = data[0].classes;
        gridItem9.innerText = data[0].modules;
    });

}


timeTime();