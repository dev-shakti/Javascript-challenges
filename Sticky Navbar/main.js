const navEl = document.querySelector(".nav");
const serviceEl = document.querySelector(".services");

window.addEventListener("scroll", () => {
  if (window.scrollY > serviceEl.offsetTop - navEl.offsetHeight - 50) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
});
