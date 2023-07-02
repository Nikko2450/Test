const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("is-active")) {
    hamburger.classList.add("is-active");
    menu.classList.add("is-active");
  } else {
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
  }
});
