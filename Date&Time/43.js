// Question no: 43.****

let dob = new Date('2004-05-25');
let currentDate = new Date();

let age = currentDate.getFullYear() - dob.getFullYear();
let monthDiff = currentDate.getMonth() - dob.getMonth();
let daysDiff = currentDate.getDay() - dob.getDate();

if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
    age--;
}

console.log(age);