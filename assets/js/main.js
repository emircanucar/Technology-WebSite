var hamburgerMenu = document.querySelector(".navbar-hamburger");
function addChange() {
  hamburgerMenu.classList.toggle("change");
}
hamburgerMenu.addEventListener("click", addChange);

var navbarMobile = document.querySelector(".navbar-mobile");
function addShowClass() {
  navbarMobile.classList.toggle("show");
}

hamburgerMenu.addEventListener("click", addShowClass);

var swiper = new Swiper(".heroSlider", {});
var swiper = new Swiper(".postSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoPlay: true,
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
