// Question no: 21.***
// Create a function that reverse each word of a given sentence: e.g: Mai hun sahil => lihsa nuh iam

let sentence = "Mai hun Sahil kumar"

let finalResult = sentence.split(' ').map(word => {
    let reverseWord = word.split('').reverse().join('')
    return reverseWord
}).join(' ')

console.log(finalResult)
