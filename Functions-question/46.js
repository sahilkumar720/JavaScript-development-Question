// Question no: 45



// let user = {
//     name: 'manas',
//     age: 23
// }


// function updateName(user, name) {
//     let newObj = { ...user, name }
//     return newObj
// }

// let updatedObj = updateName(user, 'muskan')
// console.log(updatedObj)


// let str = "manas";
// let reverseString = str.split('').reverse().join('')
// console.log(reverseString);

// let add2 = num => num + 2;
// let multiply5 = num => num * 5;
// let subtract10 = num => num - 10;

// let result = subtract10(multiply5(add2(6)))
// console.log(result)


// compose -> right to left
// pipe -> left to right

// function compose(...fns) {
//     return function (val) {
//         return fns.reduceRight((acc, currFn) => {
//             return currFn(acc);
//         }, val)
//     }
// }

// function pipe(...fns) {
//     return function (val) {
//         return fns.reduce((acc, currFn) => {
//             return currFn(acc);
//         }, val)
//     }
// }


let result = compose(subtract10, multiply5, add2)(6)
// let result2 = pipe(subtract10, multiply5, add2)(6)
console.log(result)
// console.log(result2)