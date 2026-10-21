// Question no: 45
// How do you use .reduce() to calculate the total price in a shopping cart?



let arr = [5, 10, 2, 3];

let result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(result)