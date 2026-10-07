//Question no: 22.****
// In an array of number and string, only add those numbers which are not strings.

let arr = [1, '55', 3, 'manas', 7, 1];
let sum = 0;

arr.forEach(item => {
    if(typeof item === 'number'){
        sum += item;
    }
})

console.log(sum)