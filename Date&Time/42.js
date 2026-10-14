// Question no: 42.********
// write a formdata(dataStr) function that returns a user-friendly format like jan-1, 2025. ehy it is better centralize the logic in a unility?

let n = 25;
let startingDate = new Date('2024-04-28T08:23:13.234Z');

let newDateTimeStamps = startingDate.getTime() + n * 24 * 60 * 60 * 1000;
let newDate = new Date(newDateTimeStamps);
console.log(newDate)