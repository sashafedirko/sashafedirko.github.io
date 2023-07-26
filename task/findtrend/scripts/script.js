const burger = document.getElementById('burger')
burger.addEventListener('click',function(){
    const nav = document.getElementById('nav')
    const lineOne = document.getElementById('line-one')
    const lineTwo = document.getElementById('line-two') 
    nav.classList.toggle('nav-active')
    lineOne.classList.toggle('line-one-active')
    lineTwo.classList.toggle('line-two-active')
})
