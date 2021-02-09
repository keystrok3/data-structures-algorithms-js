"use strict"

//Sorts a list according to the insertion sort algorithm
// Compare two consecutive items, if the smaller is ahead of the 
// bigger swap them. Continue to compare the items ahead of the 'smaller' if any and 
// swap appropriately as you go up the list

function insertionSort(list) {
    let i;
    let key;    //value being compared to
    for(let j = 0; j < list.length; j++) {
        key = list[j];  //value being compared against
        i = j - 1;
        while(i > -1 && list[i] > key) {    //Check if current value if sorted list is bigger than key
            list[i + 1] = list[i];
            i = i - 1;
        }
        list[i + 1] = key;  //Make the next item up the key
    }
    return list;
}

console.log(insertionSort([4, 1, 7, 0, 2, 9, 5, 3, 8, 6]));