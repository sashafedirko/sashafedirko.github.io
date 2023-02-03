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
let json_url = 'movie.json'
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

    document.getElementById('gen').innerText = data[0].genre
    document.getElementById('date').innerText = data[0].date
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`

 
    
    setInterval(function(){
        document.getElementById('title').innerText = (names[cnahgeNames()])
        document.body.style.backgroundColor = (wallpapers[cnahgecolor()])
        function cnahgeNames(){
            return Math.floor(Math.random()*names.length)
        }
        function cnahgecolor(){
            return Math.floor(Math.random()*wallpapers.length)
        }
    },4000)
    const names = ["Ant man","Spiderman","Avangers","The Boys","Money Heist","John Wick","Moon Knight","Kota Factory","Thor Love Of Thunder","Uncharted","Top Gun","Jurassic World","Eternals"]
    const wallpapers = ['red','green','yellow','orange','blue','pink','purpple','gray','black']

   /* data.forEach((el)=>{
        let{name} = el;
        const content = document.getElementById('content')
        let text = document.createElement('a')

        setInterval(function(){
            let bl = text.innerHTML = `<h1>${name}</h1>`
            console.log(bl)
           
        },4000)

        function change(){
            return Math.floor(Math.random()*text.length)
        }
      
         

    })*/

    
  

    
  

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