import { insertIcons } from "./insertSvgs";

// Variables for nav
const navOpen = document.querySelector('.btn--nav-open');
const navClose = document.querySelector('.btn--nav-close');
const navMenu = document.querySelector('.nav__menu');

// Footer icon container
export const iconContainer = document.querySelector('.footer__icons');

// Inserts inline svgs into html to clear up html files and for styling.
insertIcons();

/********************************************
  EVENT LISTENERS
********************************************/
navOpen.addEventListener('click', e => {
  navMenu.style.display = "block";
  navOpen.classList.toggle('hidden');
  navClose.classList.toggle('hidden');
});

navClose.addEventListener('click', e => {
  navMenu.style.display = "none";
  navOpen.classList.toggle('hidden');
  navClose.classList.toggle('hidden');
});