// 26.***

let sentence = "hey i Am manas kumar lal";

const capitalizeFirstLetter = (string) => {
    let resultArr = string.split(' ').map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return resultArr.join(' ')
}


let result = capitalizeFirstLetter(sentence)
console.log(result)