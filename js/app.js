const menuContainer = document.querySelector(".menu__container");
const menuContainerLogo = document.querySelector(".menu__container__logo");
const menuIcon = document.querySelector(".menu");
const flyIn = document.querySelector(".menu__navigation");
const links = document.querySelectorAll("nav a");
const logo = document.querySelector(".about__container__logo");

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

links.forEach(link => {
  link.addEventListener("click", () => {
    menuIcon.src = "imgs/folk_on_the_hill_menu.svg";
    menuIcon.classList.remove("exit");
    flyIn.style.transform = "translateX(-100%)";
  });
});

function scrolledPast(element) {
  let rectangle = element.getBoundingClientRect();
  let rectangleBottom = rectangle.bottom;

  let userScrolls = window.pageYOffset;

  if (userScrolls > rectangleBottom) {
    menuContainer.style.backgroundColor = "white";
    menuContainerLogo.style.transform = "translateY(0%)";
  } else {
    menuContainer.style.backgroundColor = "rgba(255,255,255,.0)";
    menuContainerLogo.style.transform = "translateY(-100%)";
  }
}

document.addEventListener("scroll", () => {
  scrolledPast(logo);
});

// from https://browser-update.org/#install
var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:true,api:2019.03 }; 
function $buo_f(){ 
 var e = document.createElement("script"); 
 e.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}
