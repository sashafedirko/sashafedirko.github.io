//burger menu
const openBurger = document.getElementById('open_burger');
openBurger.addEventListener('click',function(){
    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')
    line1.classList.toggle('closeline1')
    line2.classList.toggle('closeline2')
    line3.classList.toggle('closeline3')
    const nav = document.getElementById('nav')
    nav.classList.toggle('list_nav_active')
})

const url = 'cards.json'
fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(el => {
        let {img, description} =el;
        const cards = document.getElementById('cards')
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <img src=${img} alt="">
            <p>${description} </p>
        `
        cards.appendChild(card)
        
    });
})