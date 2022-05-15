import { insertIcons } from "./insertSvgs";

// Variables for nav.
const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');
const navMenu = document.querySelector('.nav__menu');

// Variables for story slides.
// Spreads a copy of the NodeList to an array.
const storySlides = [...document.querySelectorAll('.story__slide')];
// Spreads a copy of the NodeList to an array.
const storyBtns = [...document.querySelectorAll('.btn--story')];

// Variables for purchase button
const purchaseBtn = document.querySelector('.btn--pricing');
const purchaseThumb = document.querySelector('.purchase__thumb');
const headingMonthly = document.querySelector('.monthly');
const headingYearly = document.querySelector('.yearly');

// Varibles for plan price and text
// Spreads a copy of the NodeList to an array.
const planPrice = [...document.querySelectorAll('.plan__price')];
// Spreads a copy of the NodeList to an array.
const planPriceText = [...document.querySelectorAll('.plan__price-text')];
// Spreads planPrice and PlanPriceText into planList
const planList = [...planPrice, ...planPriceText];
const planPriceBasic = document.querySelector('.plan__price--basic');
const planPricePro = document.querySelector('.plan__price--pro');
const planPriceBusiness = document.querySelector('.plan__price--business');

// Footer icon container
export const iconContainer = document.querySelector('.footer__icons');

// Inserts inline svgs into html to clear up html files and for styling.
// Imported from 'insertSvgs.js.'
insertIcons();

/* Disables the hamburger button and rotates the hamburger icon into an "X".
Adds the '.slide-in' animation class to navMenu to trigger an animation and
removes the '.hidden' class to reveal the navMenu. Uses an asynchronous 
function to re-enable the hamburger button and remove it's animation class upon animation 
completion to prevent button spamming. The setTimeout time limit and animation time 
are both 500ms. */
const navShow = () => {

  setTimeout(() => {
    navMenu.classList.remove('slide-in');
    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.add('flip-top');
  hamburgerBottom.classList.add('flip-bottom');

  navMenu.classList.add('slide-in');
  navMenu.classList.remove('hidden');
}

/* Disables the hamburger button and reverts the hamburger icon back to it's
original shape. Adds the '.slide-out' animation class to navMenu to trigger an 
animation and adds the '.hidden' class to hide the navMenu. Uses an asynchronous 
function to re-enable the hamburger button and remove it's animation class upon animation 
completion to prevent button spamming. The setTimeout time limit and animation time 
are both 500ms. */
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

/* Toggles the purchase button's thumb to the corresponding side and adjusts the opacity 
of purchase section headings. Changes the prices and text displayed to the monthly options.
Adds a fade animation to each plan.*/
const monthlyOptions = () => {

  purchaseThumb.classList.remove('yearly__thumb');
  purchaseThumb.classList.add('monthly__thumb');
  headingMonthly.style.opacity = '100%';
  headingYearly.style.opacity = '50%';

  planPriceBasic.textContent = '$19.00';
  planPricePro.textContent = '$39.00';
  planPriceBusiness.textContent = '$99.00';

  planList.forEach(item => item.classList.add('fade'));
  planPriceText.forEach(text => text.textContent = 'per month');
}

/* Toggles the purchase button's thumb to the corresponding side and adjusts the opacity 
of purchase section headings. Changes the prices and text displayed to the yearly options.
Adds a fade animation to each plan.*/
const yearlyOptions = () => {

  purchaseThumb.classList.remove('monthly__thumb');
  purchaseThumb.classList.add('yearly__thumb');
  headingYearly.style.opacity = '100%';
  headingMonthly.style.opacity = '50%';

  planPriceBasic.textContent = '$190.00';
  planPricePro.textContent = '$390.00';
  planPriceBusiness.textContent = '$990.00';

  planList.forEach(item => item.classList.add('fade'));
  planPriceText.forEach(text => text.textContent = 'per year');
}

/********************************************
  EVENT LISTENERS
********************************************/
// Uses the ternary operator to decide whether the navShow or navHide function runs
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
storySlides?.forEach(slide => {

  slide.addEventListener('click', e => {
    const btn = storyBtns[storySlides.indexOf(e.currentTarget)];
    btn.click();
  });
});

// Disables purchase button until animation is finished
// Uses the ternary operator to decide whether the monthly or yearly function runs
purchaseBtn?.addEventListener('click', e => {
  setTimeout(() => {
    purchaseBtn.removeAttribute('disabled');
  }, 500);

  purchaseBtn.setAttribute('disabled', 'true');

  purchaseThumb.classList.contains('monthly__thumb') ?
  yearlyOptions() :
  monthlyOptions()
});

// Removes the animation class from plan text at animation end
// Ensures animation everytime purchase button is clicked.
planList?.forEach(item => {
  item.addEventListener('animationend', e => {
    e.currentTarget.classList.remove('fade');
  })
});
