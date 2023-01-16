

const buttCoc = document.getElementById('coconut')
buttCoc.addEventListener('click', function(){
    document.body.style.backgroundColor = '#9BD7D3'
    document.getElementById('title').classList.add('activetitle')


    document.getElementById('imgcoconut').classList.add('activecocimg')


    document.getElementById('imgorange').classList.remove('activeiOrangeimg')


    document.getElementById('imgberies').classList.remove('activeberrimg')

    document.getElementById('contactList').classList.remove('contactactive')



    document.getElementById('description').classList.add('descriptionactive')

    document.getElementById('coconutdescription').style.display = 'block'
    document.getElementById('orangedescription').style.display = 'none'
    document.getElementById('berriesdescription').style.display = 'none'







    





})




//orange

const  buttOrange = document.getElementById('orange')
buttOrange.addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange'
    document.getElementById('title').classList.add('activetitle')

    document.getElementById('imgorange').classList.add('activeiOrangeimg')


    document.getElementById('imgcoconut').classList.remove('activecocimg')
 

    document.getElementById('imgberies').classList.remove('activeberrimg')

    document.getElementById('contactList').classList.remove('contactactive')

    document.getElementById('description').classList.add('descriptionactive')

    document.getElementById('coconutdescription').style.display = 'none'
    document.getElementById('orangedescription').style.display = 'block'
    document.getElementById('berriesdescription').style.display = 'none'




})




//berries

const  buttBer = document.getElementById('berries')
buttBer.addEventListener('click', function() {
    document.body.style.backgroundColor = '#3A83B6'

    document.getElementById('title').classList.add('activetitle')

    document.getElementById('imgberies').classList.add('activeberrimg')


    document.getElementById('imgcoconut').classList.remove('activecocimg')


    document.getElementById('imgorange').classList.remove('activeiOrangeimg')

    document.getElementById('contactList').classList.remove('contactactive')

    document.getElementById('description').classList.add('descriptionactive')

    document.getElementById('coconutdescription').style.display = 'none'
    document.getElementById('orangedescription').style.display = 'none'
    document.getElementById('berriesdescription').style.display = 'block'

    

})







const home = document.getElementById('home')
home.addEventListener('click', function(){
    document.getElementById('title').classList.remove('activetitle')


    document.getElementById('imgorange').classList.remove('activeiOrangeimg')


    document.getElementById('imgcoconut').classList.remove('activecocimg')


    document.getElementById('imgberies').classList.remove('activeberrimg')

    document.getElementById('contactList').classList.remove('contactactive')

    document.getElementById('description').classList.remove('descriptionactive')


})

const contact = document.getElementById('contact')
contact.addEventListener('click', function(){
    document.getElementById('contactList').classList.add('contactactive')

    document.getElementById('title').classList.add('activetitle')

    document.getElementById('imgorange').classList.remove('activeiOrangeimg')


    document.getElementById('imgcoconut').classList.remove('activecocimg')


    document.getElementById('imgberies').classList.remove('activeberrimg')

    document.getElementById('description').classList.remove('descriptionactive')
    
    

    

})






