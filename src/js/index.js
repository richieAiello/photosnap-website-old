import { insertIcons } from "./insertSvgs";

// Variables for nav.
const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');
const navMenu = document.querySelector('.nav__menu');

// Variables for story slides.
// Spreads a copy of the NodeList to an array.
const storySlides = [...document.querySelectorAll('.story__slide')];
const storyBtns = [...document.querySelectorAll('.btn--story')];

// Footer icon container
export const iconContainer = document.querySelector('.footer__icons');

// Inserts inline svgs into html to clear up html files and for styling.
insertIcons();

const navShow = () => {

  setTimeout(() => {
    navMenu.classList.remove('slide-in');
    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.add('flip-top');
  hamburgerBottom.classList.add('flip-bottom');

  navMenu.classList.add('slide-in')
  navMenu.classList.remove('hidden')
}

const navHide = () => {

  setTimeout(() => {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('slide-out');
    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.remove('flip-top');
  hamburgerBottom.classList.remove('flip-bottom');

  navMenu.classList.add('slide-out');
}

/********************************************
  EVENT LISTENERS
********************************************/
hamburgerBtn.addEventListener('click', e => {
  navMenu.classList.contains('hidden') ?
  navShow() : 
  navHide();
});

// Reference article to main a div clickable and follow a link
// https://css-tricks.com/block-links-the-search-for-a-perfect-solution/#method-4-sprinkle-javascript-on-the-second-method
// Loops through storySlides array and adds click events to each slide.
// Every part of the slide becomes interactive and clickable.
// When the slide is clicked it's corresponding link is clicked.
storySlides.forEach(slide => {

  slide.addEventListener('click', e => {
    const btn = storyBtns[storySlides.indexOf(e.currentTarget)];
    btn.click();
  });
});