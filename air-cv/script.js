const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar__links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const body = document.querySelector('body');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').classList.add('scrolled');
    document.getElementById('navbar').classList.add('navbar-light');

    document.getElementById('navbar').classList.remove('navbar-dark');
    document.getElementById('navbar').classList.remove('bg-transparent');

    console.log('red');

    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById('navbar').classList.add('bg-transparent');

    document.getElementById('navbar').classList.remove('navbar-light');
    document.getElementById('navbar').classList.add('navbar-dark');

    // document.getElementById("logo").style.fontSize = "35px";
  }
}
