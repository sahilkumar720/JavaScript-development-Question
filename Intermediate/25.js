//Question no: 25.****
// Write a javaScript function that returns a passed string with letters in alphabetical order.

let string = "Manas Kumar Lal"


function sortInAlphabeticalOrder(string) {
    // return string.split('').sort().join('').trim()

    return (string.split(' ').sort().join(' '))
}


let result = sortInAlphabeticalOrder(string)
console.log(result);