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

    fetch(jsonLocation)
    .then(res => res.json())
    .then(data => {

        let values = Object.values(data[0]);
        // console.log(values);
        let checkIfItemRepeats = [];
        let checkIfValueRepeats = [];
        
        // .include for grid items -- this creates a random array of 9 numbers that are not the same
        for(let i = 0; i < 9; i++) {
            let randomNumber = Math.floor(Math.random() * 9);
            let filteredItemArray = checkIfItemRepeats.includes(randomNumber); // this return a bool, if not in array add, if in array reset counter

            if(filteredItemArray == false){
                checkIfItemRepeats.push(randomNumber);
            } else if (filteredItemArray == true) {
                i--;
            }
        };
        
       // working method
        // for(let i = 0; i < 9; i++){
        //     let randomValue = Math.floor(Math.random() * values.length);
        //     let filteredItemArray = checkIfValueRepeats.includes(randomValue); 
            
        //     if(filteredItemArray == false){
        //         checkIfValueRepeats.push(randomValue);
        //     } else if (filteredItemArray == true) {
        //         i--;
        //     }
        // }

        // unqiue array -- using Set()
        let toBeFiltered = [];
        for (let i = 0; i < 9; i++){
            let randomValue = Math.floor(Math.random() * values.length);
            toBeFiltered.push(randomValue);

            let filteredItemArray = [...new Set(toBeFiltered)];
            console.log(filteredItemArray);
        }



        
        // console.log(checkIfItemRepeats);
        // console.log(checkIfValueRepeats);

        for (let i = 0; i < 9; i++){
            // let gridItem = checkIfItemRepeats[i]; -- do not need, gridItems are not random, only values should be random
            let jsonValue = checkIfValueRepeats[i];
            let jsonValue1 = toBeFiltered[i];
            results[i].innerText = values[jsonValue1];
        }
    });

}



timeTime();