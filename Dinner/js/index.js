// back to top
let backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// owl carouse
$(document).ready(function () {
  $("#owl-agency").owlCarousel({
    loop: true,
    nav: false,
    margin: 50,
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
    },
  });
});

//--magnific popup-- >

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

//-- //magnific popup -->

// dark mode

let btn_dark_mode = document.querySelector("#btn-dark-mode");

btn_dark_mode.addEventListener("click", function () {
  //switch icon
  btn_dark_mode.classList.toggle("dark-mode-active");

  //Color when dark mode active
  if (btn_dark_mode.classList.contains("dark-mode-active")) {
    document.documentElement.style.setProperty("--bg-color", "#232220");
    document.documentElement.style.setProperty("--heading-color", "#eee");
    document.documentElement.style.setProperty("--font-color", "#eee");
    document.documentElement.style.setProperty("--bg-grey", "#282828");
    document.documentElement.style.setProperty(
      "--border-color-light",
      "rgba(255, 255, 255, 0.1)"
    );
    document.documentElement.style.setProperty("--bg-light", "#282828)");
    document.querySelector("body").style.backgroundColor = "#232220";
  }

  //   color when light mode active
  else {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--heading-color", "#232220");
    document.documentElement.style.setProperty(
      "--font-color",
      "rgba(22, 28, 45, 0.7)"
    );
    document.documentElement.style.setProperty("--bg-grey", "#eee");
    document.documentElement.style.setProperty("--border-color-light", "#eee");
    document.documentElement.style.setProperty(
      "--bg-light",
      "rgba(130, 115, 252, .05)"
    );
    document.querySelector("body").style.backgroundColor = "#fff";
  }
});
