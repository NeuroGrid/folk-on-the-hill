var menuContainer = document.querySelector(".menu__container");
var menuContainerLogo = document.querySelector(".menu__container__logo");
var menuIcon = document.querySelector(".menu");
var flyIn = document.querySelector(".menu__navigation");
var links = document.querySelectorAll("nav a");
var logo = document.querySelector(".about__container__logo");
menuIcon.addEventListener("click", function() {
  if (this.classList.contains("exit")) {
    this.src = "imgs/folk_on_the_hill_menu.svg";
    this.classList.remove("exit");
    flyIn.style.transform = "translateX(-100%)";
  } else {
    this.src = "imgs/folk_on_the_hill_exit.svg";
    this.classList.add("exit");
    flyIn.style.transform = "translateX(0%)";
  }
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    menuIcon.src = "imgs/folk_on_the_hill_menu.svg";
    menuIcon.classList.remove("exit");
    flyIn.style.transform = "translateX(-100%)";
  });
}

function scrolledPast(element) {
  var rectangle = element.getBoundingClientRect();
  var rectangleBottom = rectangle.bottom;
  var userScrolls = window.pageYOffset;

  if (userScrolls > rectangleBottom) {
    menuContainer.style.backgroundColor = "white";
    menuContainerLogo.style.transform = "translateY(0%)";
  } else {
    menuContainer.style.backgroundColor = "rgba(255,255,255,.0)";
    menuContainerLogo.style.transform = "translateY(-100%)";
  }
}

document.addEventListener("scroll", function() {
  scrolledPast(logo);
});
