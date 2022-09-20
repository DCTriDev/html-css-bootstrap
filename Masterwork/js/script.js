window.onscroll = function () {
  scrollFunction();
};
let header_fix = document.querySelector("header");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header_fix.classList.add("nav-fix");
  } else {
    header_fix.classList.remove("nav-fix");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.querySelector("#back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let btn_dark_mode = document.querySelector("#btn-dark-mode");

btn_dark_mode.addEventListener("click", function () {
  //switch icon
  btn_dark_mode.classList.toggle("dark-mode-active");

  if (btn_dark_mode.classList.contains("dark-mode-active")) {
    document.documentElement.style.setProperty("--bg-color", "#131313");
    document.documentElement.style.setProperty("--primary", "#DC4F72");
    document.documentElement.style.setProperty("--title-color", "#AFAFAF");
    document.documentElement.style.setProperty("--card-background", "#242629");
    document.documentElement.style.setProperty("--testi-color", "#242629");
    document.documentElement.style.setProperty("--text-color", "#AFAFAF");
    document.documentElement.style.setProperty("--light-bg-color", "#232946");
    document.documentElement.style.setProperty("--box-shadow-color", "#625461");
    document.documentElement.style.setProperty("--banner-color-h3", "#DC4F72");
    document.documentElement.style.setProperty("--banner-color-des", "#131313");
    document.documentElement.style.setProperty("--tool-item-hover", "#343A57");
    document.documentElement.style.setProperty("--accordion-bg", "#343A57");
  }

  else {
    document.documentElement.style.setProperty("--bg-color", "#FBFCFD");
    document.documentElement.style.setProperty("--primary", "#DC4F72");
    document.documentElement.style.setProperty("--title-color", "#2C3038");
    document.documentElement.style.setProperty("--text-color", "#5A5A5A");
    document.documentElement.style.setProperty("--card-background", "#FFF");
    document.documentElement.style.setProperty("--testi-color", "#5A5A5A");
    document.documentElement.style.setProperty("--light-bg-color", "#F7F9FC");
    document.documentElement.style.setProperty(
        "--box-shadow-color",
        "rgba(0, 0, 0, 0.05)");
    document.documentElement.style.setProperty("--banner-color-h3", "#2c3038");
    document.documentElement.style.setProperty("--banner-color-des", "#5a5a5a");
    document.documentElement.style.setProperty("--tool-item-hover", "#FFF");
    document.documentElement.style.setProperty("--accordion-bg", "#rgba(0,0,0,.03)");
  }
});
