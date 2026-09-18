// 29.****



let str = [1, 5, 3, 4, 2, 3, 5, 2, 3, 2];

function getOccurence(arr) {

    let freqObj = {};

    arr.forEach(letter => {
        if (freqObj.hasOwnProperty(letter)) {
            freqObj[letter]++
        } else {
            freqObj[letter] = 1;
        }
    });

    let maxFreq = Math.max(...Object.values(freqObj))

    let keyValueArr = Object.entries(freqObj)
    let filteredArray = keyValueArr.filter(entryArr => {
        return entryArr[1] === maxFreq
    })

    console.log(filteredArray)
}

getOccurence(str)