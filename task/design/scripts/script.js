//burger menu
const openBurger = document.getElementById('open_burger');
openBurger.addEventListener('click',function(){
    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')
    line1.classList.toggle('closeline1')
    line2.classList.toggle('closeline2')
    line3.classList.toggle('closeline3')
})