const navLinks = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
