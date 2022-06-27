const scrollToTop = document.querySelector(".scrollToTop");
const html = document.querySelector("html");
const responsiveNavbar = document.querySelector(".responsive__navbar");
const responsiveToggle = document.querySelector(".toggle");
const navLinks = document.querySelectorAll(".nav__link");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

navLinks.forEach((link) =>
  link.addEventListener("click", () =>
    responsiveNavbar.classList.remove("show")
  )
);

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});
