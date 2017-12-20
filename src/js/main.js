$(function() {
  $('a.dis').click(function(e){
    e.preventDefault();
  });

  $(".menu-link").click(function(e) {
  $(".menu-overlay").toggleClass("active");
  $(".m-menu").toggleClass("active");
  return false;
  });
  $("#music").click(function(e) {
  $(".soundcloud").toggleClass("active");
  return false;
  });

  //Scroll Controll
	$('#aboutx, .action').click(function(){
		$('html, body').animate({scrollTop: $('#section-2').offset().top }, 'slow');
		return false;
	});

  $('#work').click(function(){
    $('html, body').animate({scrollTop: $('#section-3').offset().top }, 'slow');
    return false;
  });

  $('#mabout').click(function(){
		$('html, body').animate({scrollTop: $('#section-2').offset().top }, 'slow');
    $(".menu-overlay").toggleClass("active");
    $(".m-menu").toggleClass("active");
    return false;
	});

  $('#mwork').click(function(){
    $('html, body').animate({scrollTop: $('#section-3').offset().top }, 'slow');
    $(".menu-overlay").toggleClass("active");
    $(".m-menu").toggleClass("active");
    return false;
  });


});
