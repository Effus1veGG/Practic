var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    460: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
