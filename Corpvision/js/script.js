// Slick
$(".banner-slider")
  .slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          swipe: true,
        },
      },
    ],
    waitForAnimate: true,
    arrows: true,
    prevArrow: '<button class="banner-slickPrev"></button>',
    nextArrow: '<button class="banner-slickNext"></button>',
  })
  .slickAnimation();

// Sticky header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#site-header").addClass("whiteHeader");
    document.querySelector("#movetop").style.display = "block";
  } else {
    $("#site-header").removeClass("whiteHeader");
    document.querySelector("#movetop").style.display = "none";
  }
});

// header-search
var btnSearchEl = document.querySelector("header .header-search .btn-material");
btnSearchEl.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.add("search-active");
});
var btnCloseEl = document.querySelector("header .header-search .icon-close");
btnCloseEl.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.remove("search-active");
});

// owl carousel
$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  });
});
// dark mode
var btnDarkMode = document.querySelector("#btn-dark-mode");
btnDarkMode.addEventListener("click", function () {
  //Toggle icon
  if (btnDarkMode.classList.contains("dark-mode-active")) {
    btnDarkMode.classList.remove("dark-mode-active");
  } else {
    btnDarkMode.classList.add("dark-mode-active");
  }

  //Active dark mode
  if (btnDarkMode.classList.contains("dark-mode-active")) {
    document.documentElement.style.setProperty("--bg-color", "#151421");
    document.documentElement.style.setProperty("--heading-color", "#eee");
    document.documentElement.style.setProperty("--font-color", "#c2c2c2");
    document.documentElement.style.setProperty("--bg-grey", "#100f19");
    document.documentElement.style.setProperty("--bg-lightgrey", "#100f19");
    document.documentElement.style.setProperty(
      "--border-color-light",
      "rgb(255 255 255 / 10%)"
    );
  } else {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--heading-color", "#3f3a64");
    document.documentElement.style.setProperty("--font-color", "#666");
    document.documentElement.style.setProperty("--bg-grey", "#f7f7f7");
    document.documentElement.style.setProperty("--bg-lightgrey", "#f8f9fa");
    document.documentElement.style.setProperty("--border-color-light", "#eee");
  }
});
