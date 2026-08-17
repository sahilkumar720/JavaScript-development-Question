// question no: 4

// Create a function that takes an array containing both numbers and strings and returns a new array containing only the string values.

let arr = [1, 5, 3, 'm', 'a', 10];

let resultArr = arr.filter(element=>{
    if(typeof element === 'string'){
        return true;

    }
    else{
        return false;
    }
})

console.log(resultArr);