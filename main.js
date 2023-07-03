const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerLogo = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carIcon = document.querySelector(".shop-icon");
const carAside = document.querySelector(".product-detail");

function toggleProductDetail() {

    //*carAside.classList.toggle("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    const isCarAsideClosed = carAside.classList.contains("inactive")

    if {
        isDesktopMenuClosed
    }
}

carIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

burguerLogo.addEventListener("click", toggleMobileMenu);