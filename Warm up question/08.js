// question no: 08
// Given an array of string, return a new array where all string are in uppercase.

let arr = ["alu", "potato", "tomato", "onion", "garlic"];

let upperCaseArr = arr.map(element => {
    return  (element.toUpperCase())
} )


console.log(upperCaseArr);