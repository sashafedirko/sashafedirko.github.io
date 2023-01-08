var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  const burgerOpen = document.getElementById("menu-open")
  burgerOpen.addEventListener("click", function(){
    document.getElementById("nav").style.display = "flex"
    document.getElementById("menu-open").style.display = "none"
    document.getElementById("menu-close").style.display = "block"
  })
  const burgerClose = document.getElementById("menu-close")
  burgerClose.addEventListener("click", function(){
    document.getElementById("nav").style.display = "none"
    document.getElementById("menu-open").style.display = "block"
    document.getElementById("menu-close").style.display = "none"
  })