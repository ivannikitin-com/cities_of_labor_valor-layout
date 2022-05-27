"use strict";
const primaryNav = document.querySelector(".header__collapse");
const navToggle = document.querySelector(".navbar-toggler");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

var items = document.querySelectorAll(".search-results__item");
items.forEach(function (item) {
  item.addEventListener("mouseover", function hover() {
    item.querySelector(".search-results__serial-num").style.color =
      "var(--red-100)";
  });
  item.addEventListener("mouseleave", function leave() {
    item.querySelector(".search-results__serial-num").style.color =
      "var(--blue)";
  });
});
