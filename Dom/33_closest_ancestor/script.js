//33.....****
//how do you find cloest ancestor element that matches a selector?


let child = document.querySelector('#child')

child.addEventListener('click', (e)=>{
    console.log(e.target.closest('.parent'))
})
