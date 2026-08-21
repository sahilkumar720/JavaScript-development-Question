// question no: 06
// write a function that return the length of a given object (number of keys).


let obj = {
    name: 'sahil kumar',
    age: 25,
    city: 'meerut',

}
let getObjectLength = ()=>{
    return Object.keys(obj).length
}

let length = getObjectLength(obj)
console.log(length);
