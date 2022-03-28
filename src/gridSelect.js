
// Selects each grid-item and save into array
export default function assingGridItems(idElement) {
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

