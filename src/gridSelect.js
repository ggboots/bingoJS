
// Selects each grid-item and save into array
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

async function fetchData(JSON, gridItemLocation){
    fetch(JSON)
    .then(res => res.json())
    .then(data => {      
        let values = Object.values(data[0]);
        let checkIfValueRepeats = [];
                    
        for(let i = 0; i < 9; i++){
            let randomValue = Math.floor(Math.random() * values.length);
            let filteredItemArray = checkIfValueRepeats.includes(randomValue); 
                        
            if(filteredItemArray == false){
                checkIfValueRepeats.push(randomValue);
            } else if (filteredItemArray == true) {
                i--;
                }
            }
                          
        for (let i = 0; i < 9; i++){            
            let jsonValue = checkIfValueRepeats[i];
            gridItemLocation[i].innerText = values[jsonValue];
        }
    });
         
}

async function hasBeenClick(gridItemLocation){
    // does not allow binding, as it is reference
    gridItemLocation[0].addEventListener("click", () => {
        // dry code (use this keyword to assign event click)
        // e.target;
        gridItemLocation[0].style = "background-color:red; color:black";
        finished == true;
    });

    gridItemLocation[1].addEventListener("click", () => gridItemLocation[1].style = "background-color:red; color:black");
    gridItemLocation[2].addEventListener("click", () => gridItemLocation[2].style = "background-color:red; color:black");
    gridItemLocation[3].addEventListener("click", () => gridItemLocation[3].style = "background-color:red; color:black");
    gridItemLocation[4].addEventListener("click", () => gridItemLocation[4].style = "background-color:red; color:black");
    gridItemLocation[5].addEventListener("click", () => gridItemLocation[5].style = "background-color:red; color:black");
    gridItemLocation[6].addEventListener("click", () => gridItemLocation[6].style = "background-color:red; color:black");
    gridItemLocation[7].addEventListener("click", () => gridItemLocation[7].style = "background-color:red; color:black");
    gridItemLocation[8].addEventListener("click", () => gridItemLocation[8].style = "background-color:red; color:black");


    // binding event, function needs to be set as reference

}


// Allows mulitple functions to be exported
export {assingGridItems, fetchData, hasBeenClick};