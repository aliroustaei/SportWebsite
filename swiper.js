let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    dealy: 2000,
    disableOnInteraction:false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween:20
    },
    768: {
      slidesPerView: 3,
      spaceBetween:30
    }
  }
});
