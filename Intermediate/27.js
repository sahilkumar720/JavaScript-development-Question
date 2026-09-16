//  27.*****


function getArrayElement(arr, n){
    if(!n){
        return arr[0]
    }else if(n > arr.length){
        console.log("itna elements to array me present hi nahi hai")
    }else{
        return arr.slice(0, n)
    }
}