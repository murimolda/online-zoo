document.addEventListener("DOMContentLoaded", function () {

    /*Hamburger nav function*/
    const navBlock = document.querySelector('.header-nav-wrap');
    const navDesktop = document.querySelector('.header-hamburger-wrap');
    const hamburgerIcon = document.querySelector('.hamburger');
    const navLink = document.querySelectorAll(".header-nav-link");
    const navLogo = document.querySelector(".header-nav-logo");
    const body = document.querySelector("body");

    const hamburgerClick = () => {
        navBlock.classList.toggle("open");
        hamburgerIcon.classList.toggle("active");
        navLogo.classList.toggle("active");
        body.classList.toggle("not-scroll");
    };

    hamburgerIcon.addEventListener('click', function () {
        hamburgerClick();
    });

    navDesktop.addEventListener('click', function (event) {
        event.stopPropagation()
    })


    navBlock.addEventListener('click', function () {
        hamburgerClick();
    });

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            console.log('+');
            hamburgerClick();
        });
    };





























































});