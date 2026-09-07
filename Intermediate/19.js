// Question no: 19
// How would you handle high-precision decimal math in js?


// let sum = Number((0.1 + 0.2).toFixed(4));
// console.log(sum !== 0.3)


//alternative solution


let Decimal = require('decimal.js')

let num1 = Decimal(0.1);
let num2 = Decimal(0.2);

let sum = num1.plus(num2)

console.log(Number(sum) === 0.3)