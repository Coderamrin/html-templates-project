const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar__hamburger');
const navLinks = document.querySelector('.navbar__links');

const teamCard = document.querySelectorAll('.team__item');
const teamCardSocial = document.querySelector('.team__item-social');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.onscroll = function () {
  scrollFunction();
};

teamCard.forEach((card) => {
  card.addEventListener('mouseover', () => {
    teamCardSocial.classList.add('show');
  });

  card.addEventListener('mouseout', () => {
    teamCardSocial.classList.remove('show');
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add('navbar__scrolled');
  } else {
    navbar.classList.remove('navbar__scrolled');
  }
}
