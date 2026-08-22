// question no: 07
// In an array of object filter out those objects which have gender's value male.


let arr = [
    {
        name: 'sahil kumar',
        gender: 'male',

    },
    {
        name: 'vk',
        gender: 'female',
    },
     {
        name: 'kapil kumar',
        gender: 'male',

    },
    {
        name: 'Ak',
        gender: 'female',
    },
]

let result = arr.filter(obj=>{
    return obj.gender === 'male'
})

console.log(result);