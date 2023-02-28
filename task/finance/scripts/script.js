const toTop = document.getElementById('scroll_up')
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        toTop.classList.add('scroll_up_active')
    }else{
        toTop.classList.remove('scroll_up_active')
    }
})
toTop.addEventListener('click', function(){
    window.scrollTo(0, 0)
})

const openLayout = document.getElementById('layout2_buttom')
openLayout.addEventListener('click',function(){
    const layout2 = document.getElementById('layout2')
    layout2.classList.toggle('layout2_active')
})

const logIn = document.getElementById('login')
logIn.addEventListener('click',function(){
    const form = document.getElementById('login_form')
    form.classList.toggle('form_active')   
    
})

const tryForFree = document.querySelectorAll('.try_for_free')
for(let item of tryForFree){
    item.addEventListener('click', function(){
        const formTryForFree = document.getElementById('form_try_for_free')
        formTryForFree.classList.toggle('form_try_for_free_active')
    })
}

const burgerMenu = document.getElementById('burger_menu')
const burgerMenuClose = document.getElementById('burger_menu_close')
burgerMenu.addEventListener('click',function(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('nav_panel_active')
    burgerMenu.style.display ='none'
    burgerMenuClose.style.display = 'block'
})
burgerMenuClose.addEventListener('click',function(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('nav_panel_active')
    burgerMenu.style.display ='block'
    burgerMenuClose.style.display = 'none'
})






const url = "sources.json"
fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(el => {
        let {mainImg, title, imgArr} = el
        const block = document.createElement('div')
        block.classList.add('article_block')
        block.innerHTML = `
            <img src=${mainImg} alt="">
            <p>${title}</p>
            <div class="arr">
                <p>Read more</p>
                <img src=${imgArr} alt="">
            </div>
        `
        const articles_wrap = document.getElementById('articles_wrap')
        articles_wrap.appendChild(block)
    });
})
