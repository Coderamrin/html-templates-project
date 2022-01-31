const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar__hamburger');
const navLinks = document.querySelector('.navbar__links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add('navbar__scrolled');
  } else {
    navbar.classList.remove('navbar__scrolled');
  }
}
