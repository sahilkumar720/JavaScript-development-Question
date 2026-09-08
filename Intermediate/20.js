// 20.***

let string = "manas";
let arr = ['m', 'a', 'n', 'a', 's']

// let test = arr.slice(-4, -2)
// console.log(test)
// console.log(arr, string)


let test = arr.splice(-4, 0, 'z', 'y')
console.log(test);
console.log(arr);

/*

1st difference - slice apka string and array dono ke sath kam karta hai lekin splice apka sirf or sirf array ke sath kam karta hai

2nd difference - slice apka originial array, string me koi change nahi karta hai lekin splice apka original array me change kar deta hai

3rd difference - slice apka sirf tukda kat ke de rha hota hai lekin splice apka tukda bhi katt ke de skta hai sath hi add bhi kar skta h elements ko and sath hi delete bhi kar skta hai elements ko


*/