//Question no:  27.*****
// Write a javascript function to get the first element of array. passing a parameter 'n' elements of the array.




function getArrayElement(arr, n){
    if(!n){
        return arr[0]
    }else if(n > arr.length){
        console.log("itna elements to array me present hi nahi hai")
    }else{
        return arr.slice(0, n)
    }
}