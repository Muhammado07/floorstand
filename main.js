const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar .logo img")
const lang = document.querySelector('.navbar .lang a')


window.onscroll = function () {
    // pageYOffset or scrollY

    if (window.pageYOffset > 40) {
        navbar.classList.add("scrolled");
        logo.setAttribute("src", "img/logo.png")
        lang.style.color = "#151515"

    } else {
        navbar.classList.remove("scrolled");
        logo.setAttribute("src", "img/logo-white.png")
        lang.style.color = "#fff"
    }
};


// Date Year

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()
