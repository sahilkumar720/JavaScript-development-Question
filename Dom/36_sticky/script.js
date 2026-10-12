//32.....****
//create a sticky header on scroll. the header become fixed to the top after scrolling down.(key concept: scroll event, window.scroll event, window.scrollY, classList.add/remove).



let navbar = document.querySelector('nav')

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 100){
        navbar.classList.add('stick')
    }else{
        navbar.classList.remove('stick')
    }
})