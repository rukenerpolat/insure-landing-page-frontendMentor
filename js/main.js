const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  body.classList.add('menu-open');
});

menuClose.addEventListener('click', () => {
  navLinks.classList.remove('active');
  body.classList.remove('menu-open');
});
