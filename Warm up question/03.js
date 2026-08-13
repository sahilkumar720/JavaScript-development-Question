//question no : 2
// find the combination of two array.


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = ['a', 'b']

// let combinationArr = arr1.concat(arr2, arr3)


let combinationArr = [...arr1, ...arr2, ...arr3]
console.log(combinationArr);