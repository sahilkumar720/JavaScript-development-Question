// 25.****

let string = "Manas Kumar Lal"


function sortInAlphabeticalOrder(string) {
    // return string.split('').sort().join('').trim()

    return (string.split(' ').sort().join(' '))
}


let result = sortInAlphabeticalOrder(string)
console.log(result);