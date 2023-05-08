const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown');

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
}


dropdown.addEventListener('click', function() {
  this.querySelector('.dropdown-menu').classList.toggle('show');
});

window.addEventListener('click', function(e) {
  if (!dropdown.contains(e.target)) {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(function(menu) {
      menu.classList.remove('show');
    });
  }
});

