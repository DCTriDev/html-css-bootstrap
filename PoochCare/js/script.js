$(".counter").countUp({
    time: 2000,
    delay: 10,
});
$(document).ready(function () {
    $(".owl-one").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            480: {
                items: 1,
                nav: false,
            },
            667: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: false,
            },
        },
    });
});

$(document).ready(function () {
    $("#owl-testimonial").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            736: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
                loop: false,
            },
        },
    });
});
$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",
    });

    $(".popup-with-move-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-slide-bottom",
    });
});
window.onscroll = function () {
    scrollFunction();
};
let header = document.querySelector("header");
let backToTop = document.getElementById("back-to-top");
let btnDarkMode = document.querySelector("#btn-dark-mode");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add("nav-fixed");
    } else {
        header.classList.remove("nav-fixed");
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
});

btnDarkMode.addEventListener("click", function () {
    //Toggle icon
    if (btnDarkMode.classList.contains("dark-mode-active")) {
        btnDarkMode.classList.remove("dark-mode-active");
    } else {
        btnDarkMode.classList.add("dark-mode-active");
    }

    //Active dark mode

    if (btnDarkMode.classList.contains("dark-mode-active")) {
        document.documentElement.style.setProperty("--bg-color", "#151515");
        document.documentElement.style.setProperty("--bg-light", "#222");
        document.documentElement.style.setProperty("--heading-color", "#DDD");
        document.documentElement.style.setProperty("--font-color", "#AFAFAF");
        document.documentElement.style.setProperty("--border-light", "#444");
        document.documentElement.style.setProperty("--border-color", "#333");
    } else {
        document.documentElement.style.setProperty("--bg-color", "#FFF");
        document.documentElement.style.setProperty("--bg-light", "rgba(147, 107, 232, 0.05)");
        document.documentElement.style.setProperty("--heading-color", "#00c04");
        document.documentElement.style.setProperty("--font-color", "#696969");
        document.documentElement.style.setProperty("--border-light", "#F0F3F0");
        document.documentElement.style.setProperty("--border-color", "#DDD");
    }
});
