// Question 47
// How do you implement your own version of map() function on arrays?


 let arr = [1,2,3,4,5,6];

let squareLogic = (r) =>{
    return r*r
}

let cubeLogic = (r)=>{
    return r*r*r
}

let diameterLogic = (r)=>{
    return r*2;
}

let Calculate = function(logicFn){
    let outputArr = [];
    for(let i=0; i<arr.length; i++){
       outputArr.push(logicFn(arr[i]))
    }
    return outputArr;
}
