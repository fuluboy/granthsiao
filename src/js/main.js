$(function() {

  $(".menu-link").click(function(e) {
    e.preventDefault();
  $(".menu-overlay").toggleClass("active");
  $(".m-menu").toggleClass("active");

  });

});
