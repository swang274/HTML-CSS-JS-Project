const getElement = (selector) => document.querySelector(selector);
const navLinks = getElement(".nav-links");
const navBtn = getElement(".nav-btn");
navBtn.addEventListener("click", () => navLinks.classList.toggle("show-links"));

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
