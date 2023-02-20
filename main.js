//****--- navbar ---****//
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

//* open menu  *//
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

//* close menu  *//
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

//* scroll sticky nav  *//
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  scrollY > 70 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
});

//****--- scroll top ---****//
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  scrollY > 500
    ? scrollTop.classList.add("active")
    : scrollTop.classList.remove("active");
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
