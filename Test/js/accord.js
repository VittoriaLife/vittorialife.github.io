'use strict';

let accordionTitle = document.getElementsByClassName('accordion__title');
let accordionText = document.getElementsByClassName('accordion-text-wrap');

for (let i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener('click', function() {
    accordionText[i].classList.toggle('accordion-text-wrap--hidden');
  });
};