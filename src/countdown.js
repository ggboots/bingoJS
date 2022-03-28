// couple gridSelect.js with timeTime in one file 
// export multiple functions

export default function timeTime(JSON, gridItemLocation){
    
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

