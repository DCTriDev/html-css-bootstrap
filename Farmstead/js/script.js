// Slick Header
$(".images-inner").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  prevArrow: "none",
  nextArrow: "none",
});
// Slick Testimonials
$(".owl-stage").slick({
  autoplay: false,
  dots: true,
  infinite: true,
  arrows: false,
});

// Sticky header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#site-header").addClass("whiteHeader");
  } else {
    $("#site-header").removeClass("whiteHeader");
  }
});
// btn scroll top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#movetop").fadeIn();
    } else {
      $("#movetop").fadeOut();
    }
  });
  $("#movetop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Dark Mode
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
    document.documentElement.style.setProperty("--bg-color", "#222222");
    document.documentElement.style.setProperty("--heading-color", "#fdfffc");
    document.documentElement.style.setProperty("--bg-grey", "#0b0d0e");
    document.documentElement.style.setProperty(
      "--shadow-color",
      "rgba(23 19 19 / 1)"
    );
    document.documentElement.style.setProperty(
      "--border-color-light",
      "rgb(255 255 255 / 20%)"
    );
    document.documentElement.style.setProperty("--font-color", "#b7b7b7");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#FFF");
    document.documentElement.style.setProperty("--heading-color", "#060606");
    document.documentElement.style.setProperty("--bg-grey", "#f4f4f4");
    document.documentElement.style.setProperty(
      "--shadow-color",
      "rgb(0 0 0 / 3%)"
    );
    document.documentElement.style.setProperty("--border-color-light", "#eee");
    document.documentElement.style.setProperty("--font-color", "#707070");
  }
});
