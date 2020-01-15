var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var contactsFrame = document.querySelector('.contacts__iframe');
var contactsImage = document.querySelector('.contacts__map-image');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
// contactsFrame.classList.remove('hidden');
// contactsImage.classList.add('hidden');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
