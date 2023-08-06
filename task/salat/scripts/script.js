const burger = document.getElementById('burger')
burger.addEventListener('click', function(){
    const nav = document.getElementById('nav')
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    nav.classList.toggle('nav-active')
    one.classList.toggle('one-line-active')
    two.classList.toggle('two-line-active')
    burger.classList.toggle('burger-menu-active')
})

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});


