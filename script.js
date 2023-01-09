window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav ul");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});