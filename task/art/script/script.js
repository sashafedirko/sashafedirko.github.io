const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone:{
      smooth: true
  }
});


setTimeout(function(){
    const title = document.getElementById('title')
    title.classList.add('title_active')
},2000)


const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  slidesPerView: 2,                   //number of slides to show
  centeredSlides : true,              //put acctive slide center
  spaceBetween: 20,                   //space between slides 
  pagination: {                       //pagination（dots）
      el: '.swiper-pagination',
  },
  effect: "coverflow",
  coverflowEffect: {          // added
    rotate: 5,              // added (Rotate of the prev and next slides)
    depth: 200,             // added (Depth of the prev and next slides)
    stretch: 30,            // added (Space between the slides)
    modifier: 1,            // added (Multiply the values of rotate, depth, and stretch)
    scale: 0.8,               // added (Size ratio of the prev and next slides)
    slideShadows: false,    // added (Presence of shadow on the surfaces of the prev and next slides)
}, 
  navigation: {                       //navigation（arrows）
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})





