const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerLogo = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

burguerLogo.addEventListener("click", toggleMobileMenu);