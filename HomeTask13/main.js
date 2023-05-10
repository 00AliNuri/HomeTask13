const myButton = document.getElementById('burger')
const nav = document.querySelector('.side')
const closeButton = document.getElementById('close')
const everyThing = document.getElementsByTagName('body')
const myContainer = document.querySelector('.container')

myButton.addEventListener('click', ()=>{
    nav.style.display = 'flex'
    nav.style.backdropFilter = "blur(3px)";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    myContainer.style.marginLeft = '20px'
})

closeButton.addEventListener('click', ()=>{
    nav.style.display = 'none'
    myContainer.style.marginLeft = '0px'
})