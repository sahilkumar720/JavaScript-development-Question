// question no: 13
// Write a function that checks if a number is prime.


let arr = [1,2,3,12,5]


function checkNumberArray(localArr){
   

    let isNumbers = localArr.every(elem => typeof elem === 'number')

  return isNumbers;
    
}

let isAllNumbers = checkNumberArray(arr);
console.log(isAllNumbers);
