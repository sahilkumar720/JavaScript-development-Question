// question no: 15
// Create a function that remove duplicate values from an array.

//method 1

// function removeDuplicate(arr){
//     let set = new Set(arr);
//     return [...set]
// }


// let resultArr = removeDuplicate([1,2,2,5,2,3,4,1])
// console.log(resultArr)

// method 2

function removeDuplicate(arr){
   let resultantArr = arr.filter((element, index)=>{
    return arr.indexOf(element) === index
   })
   return resultantArr;
}


let resultArr = removeDuplicate([1,2,2,5,2,3,4,1])
console.log(resultArr)
