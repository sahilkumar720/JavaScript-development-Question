// question no: 09
// Check if an object is empty (has no keys).

let obj = {
    name: "Sahil",

}

let keysArr = Object.keys(obj);

let isEmptyObject = keysArr.length < 1;

if(isEmptyObject){
    console.log("Object is empty");
    
}else{
    console.log("object is not empty");
    
}