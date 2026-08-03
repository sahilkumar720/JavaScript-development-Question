// Question no: 01
// Create a function that return the last element of an array.


function getLastElement(arr){
    return arr[arr.length - 1];
}

let myArray = [1,5,3,7,9];

let LastElement = getLastElement(myArray);
console.log(LastElement);  // output: 9


