
// question no: 40


let nowDate = new Date('2025-04-23') // YYYY-MM-DDTHH:mm:ss.sssZ
let userDate = new Date('2025-05-26');

let diff = userDate - nowDate;
let numOfDays = (Math.floor(diff / 1000 / 60 / 60 / 24 )) // 1s = 1000ms

if(numOfDays > 30){
    console.log("date khatm ho gya bhaiya... kha the aap?? 30 days ke andar form bharna tha na")
}else{
    console.log("congratulations apka form submit ho chuka")
}