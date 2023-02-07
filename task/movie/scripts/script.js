let left_btn = document.getElementsByClassName('bi-chevron-left')[0]
let right_btn = document.getElementsByClassName('bi-chevron-right')[0]
let cards = document.getElementsByClassName('cards')[0]
let search = document.getElementsByClassName('search')[0]
let search_input = document.getElementById('search_input')



left_btn.addEventListener('click',function(){
    cards.scrollLeft -= 140
})
right_btn.addEventListener('click',function(){
    cards.scrollLeft += 140
})
let json_url = "https://sashafedirko.github.io/task/movie/movie.json"
fetch(json_url)
.then(response => response.json())
.then(data => {
    data.forEach((el) => {
        let {name,imdb,date,sposter,bposter,genre,url} = el;
        let card = document.createElement('a')
        card.classList.add('card')
        card.href = url
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" >
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
            </div>
        </div>
        `
        cards.appendChild(card)

    });

    /*document.getElementById('gen').innerText = data[0].genre
    document.getElementById('date').innerText = data[0].date
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`*/

 
    
  
    data.forEach((el,i)=>{
        let{name,date,genre,imdb,description,background} = el;
        setInterval(function(){
            document.getElementById('title').innerHTML = `<h1>${name}</h1>`
            document.getElementById('description').innerHTML = `<p>${description}</p>`
            document.getElementById('date').innerHTML = `<h4 id="date">${date}</h4>`
            document.getElementById('gen').innerHTML = `<h5 id="gen">${genre}</h5>`
            document.getElementById('rate').innerHTML = `<h3 id="rate"><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>`

            document.body.style.background = background
            document.body.style.backgroundPosition = 'center'
            document.body.style.backgroundSize = 'cover'
           
        },4000*(i+1))
        
        
        
            
    })



    
  

    
  

    data.forEach((el) => {
        let {name,imdb,date,sposter,genre,url} = el;
        let card = document.createElement('a')
        card.classList.add('card')
        card.href = url
        card.innerHTML = `
        <a href="#" class="card">
        <img src="${sposter}" alt="">
            <div class="cont">
                <h3>${name}</h3>
                <p>${genre}, ${date} <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
            </div>
        </a>
        `
        search.appendChild(card)

    });
    search_input.addEventListener('keyup', function(){
        let filter = search_input.value.toUpperCase()
        let a = search.getElementsByTagName('a')

        for(let i=0; i < a.length; i=i+1){
            let b = a[i].getElementsByClassName('cont')[0]

            let textValue = b.textContent || b.innerText
            if(textValue.toUpperCase().indexOf(filter) > -1){
                a[i].style.display = 'flex'
                search.style.visibility = 'visible'
                search.style.opacity = 1;
            }else{
                a[i].style.display = 'none'
            }
            if(search_input.value == ''){
                a[i].style.display = 'none'
            }
            
        }

    })
})

//burger menu
const openBurger = document.getElementById('open_burger');
openBurger.addEventListener('click',function(){
    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')
    line1.classList.toggle('closeline1')
    line2.classList.toggle('closeline2')
    line3.classList.toggle('closeline3')
    document.getElementById('bur').classList.toggle('active')
})