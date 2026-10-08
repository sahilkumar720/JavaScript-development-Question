//Question no: 24. *****
// Write a javaScript function that reverse a number.

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''))
}


let reverse = reverseNumber(24523454)
console.log(reverse)