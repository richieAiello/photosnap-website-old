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

// Variables for purchase button
const purchaseBtn = document.querySelector('.btn--pricing');
const purchaseThumb = document.querySelector('.purchase__thumb');
const headingMonthly = document.querySelector('.monthly');
const headingYearly = document.querySelector('.yearly');
const planPriceBasic = document.querySelector('.plan__price--basic');
const planPricePro = document.querySelector('.plan__price--pro');
const planPriceBusiness = document.querySelector('.plan__price--business');
const planPriceText = document.querySelectorAll('.plan__price-text');

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

const monthlyOptions = () => {

  purchaseThumb.classList.remove('yearly__thumb');
  purchaseThumb.classList.add('monthly__thumb');
  headingMonthly.style.opacity = '100%';
  headingYearly.style.opacity = '50%';

  planPriceBasic.textContent = '$19.00';
  planPricePro.textContent = '$39.00';
  planPriceBusiness.textContent = '$99.00';

  planPriceText.forEach(price => price.textContent = 'per month');
}

const yearlyOptions = () => {

  purchaseThumb.classList.remove('monthly__thumb');
  purchaseThumb.classList.add('yearly__thumb');
  headingYearly.style.opacity = '100%';
  headingMonthly.style.opacity = '50%';

  planPriceBasic.textContent = '$190.00';
  planPricePro.textContent = '$390.00';
  planPriceBusiness.textContent = '$990.00';

  planPriceText.forEach(price => price.textContent = 'per year');
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

purchaseBtn.addEventListener('click', e => {

  purchaseThumb.classList.contains('monthly__thumb') ?
  yearlyOptions() :
  monthlyOptions()
});
