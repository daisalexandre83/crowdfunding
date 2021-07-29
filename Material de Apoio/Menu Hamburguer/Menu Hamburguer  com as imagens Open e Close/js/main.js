var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xclose = document.querySelector(".xclose")
var hamburguer = document.querySelector(".hamburguer")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xclose.style.display = "none";
    hamburguer.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xclose.style.display = "block";
    hamburguer.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)