$(function() {

  $(".menu-link").click(function(e) {
    e.preventDefault();
  $(".menu-overlay").toggleClass("active");
  $(".m-menu").toggleClass("active");
  });
  $("#music").click(function(e) {
    e.preventDefault();
  $(".soundcloud").toggleClass("active");
  });

  //Scroll Controll
	$('#about, .action').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top }, 'slow');
		return false;
	});

  $('#work').click(function(){
    $('html, body').animate({scrollTop: $('.works').offset().top }, 'slow');
    return false;
  });

  $('#mabout').click(function(){
		$('html, body').animate({scrollTop: $('.about').offset().top }, 'slow');
    $(".menu-overlay").toggleClass("active");
    $(".m-menu").toggleClass("active");
    return false;
	});

  $('#mwork').click(function(){
    $('html, body').animate({scrollTop: $('.works').offset().top }, 'slow');
    $(".menu-overlay").toggleClass("active");
    $(".m-menu").toggleClass("active");
    return false;
  });


});
