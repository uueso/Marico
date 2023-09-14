
document.getElementById("signup-btn").addEventListener("click", function() {

    window.location.href = "signup.html";
});


const headerBurger = document.getElementById('nav-toggle');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
});

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


$(function() {

  var header = $("#header"), 
      headerH = header.innerHeight(),
      scrollOffset = 0;

  $(window).on("scroll", function() {
    if ($(window).width() < 990) {
      scrollOffset = $(this).scrollTop();

      var activationOffset = headerH * 2;

      if (scrollOffset >= headerH) {
        header.addClass("header--fixed");
      } else {
        header.removeClass("header--fixed");
      }
    }
  });

});
