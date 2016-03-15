

$(document).ready(function() {

  $("#about-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#about-block").offset().top
      }, 1000);
  });

  $("#contact-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact-block").offset().top
      }, 1000);
  });

  $("#team-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#team-block").offset().top
      }, 1000);
  });

  $("#affiliates-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#affiliates-block").offset().top
      }, 1000);
  });

  $("#").click(function() {
      $('html, body').animate({
          scrollTop: $("#").offset().top
      }, 1000);
  });

});
