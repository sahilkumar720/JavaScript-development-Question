// 21.****

let sentence = "Mai hun manas kumar lal"

let finalResult = sentence.split(' ').map(word => {
    let reverseWord = word.split('').reverse().join('')
    return reverseWord
}).join(' ')

console.log(finalResult)
