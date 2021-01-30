const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".header-nav");
const menuClose = document.querySelector(".menu-close")

menuButton.addEventListener("click", () => {
    nav.classList.add('nav-open')
})

menuClose.addEventListener("click", () => {
    nav.classList.remove('nav-open')
})