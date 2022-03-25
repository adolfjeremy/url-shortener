const toogleMobileMenu = () => {
    document.body.classList.toggle("no-scroll");
    document.querySelector("mobile-menu").classList.toggle("open");
    event.stopPropagation();
};

export default toogleMobileMenu;
