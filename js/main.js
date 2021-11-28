let btn = document.querySelector(".toggle-menu");
let icon = document.querySelector(".toggle-menu i");
let menu = document.querySelector(".menu-bar");

btn.addEventListener("click", function(e) {
    menu.classList.toggle("active");
    icon.classList.toggle("fa-times");
});