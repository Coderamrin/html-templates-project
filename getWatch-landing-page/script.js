const navLinks = Array.from(document.querySelectorAll('.nav-item .nav-link'));

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('activeLink');

    current[0].classList.remove('activeLink');
    this.classList.add('activeLink');
  });
}
