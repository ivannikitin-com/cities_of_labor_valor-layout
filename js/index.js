'use strict'
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

// let countColor = document.querySelector('.search-results__link').closest("search-results__item::before");

// countColor.addEventListener('mouseover', () => {
//     countColor.style.color = `#green`;
// });

// countColor.addEventListener('mouseout', () => {
//     countColor.style.color = "#000";
// });