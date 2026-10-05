// Question no: 42.********

let n = 25;
let startingDate = new Date('2024-04-28T08:23:13.234Z');

let newDateTimeStamps = startingDate.getTime() + n * 24 * 60 * 60 * 1000;
let newDate = new Date(newDateTimeStamps);
console.log(newDate)