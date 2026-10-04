// Question no : 41

function takeDifference(start, end) {
    let startDate = new Date(start);
    let endDate = new Date(end);

    let diff = (endDate - startDate) / 1000;

    let years = Math.floor(diff / (60 * 60 * 24 * 365));
    diff = diff % (60 * 60 * 24 * 365);

    let months = Math.floor(diff / (60 * 60 * 24 * 30));
    diff = diff % (60 * 60 * 24 * 30);

    let days = Math.floor(diff / (60 * 60 * 24));
    diff = diff % (60 * 60 * 24);

    let hours = Math.floor(diff / (60 * 60));
    diff = diff % (60 * 60);

    let minutes = Math.floor(diff / (60));
    let seconds = Math.floor(diff % (60));

    return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
}

// let startingDate = '2024-04-28T08:23:13.234Z'
// let endingDate = '2025-07-23T09:24:12.323Z'

// let difference = takeDifference(startingDate, endingDate)
// console.log(difference);


// let {DateTime} = require('luxon')

// function takeDifference(start, end) {
//     let startDate = DateTime.fromISO(start);
//     let endDate = DateTime.fromISO(end);

//     let diff = endDate.diff(startDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'])

//     let {years, months, days, hours, minutes, seconds, milliseconds} = diff;

//     return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds`
// }

// let startingDate = '2024-04-28T08:23:13.234Z'
// let endingDate = '2025-07-23T09:24:12.323Z'

// let difference = takeDifference(startingDate, endingDate)
// console.log(difference)

