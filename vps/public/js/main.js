$(function() {
  $('.me-graphic').fadeIn().css("display","inline-block");
  $('.title-text').delay(100).fadeIn();
  $('.look-down').click(function() {
    $(document).scrollTo($('ul'), 500, {easing:'easeOutQuart',  offset:-30});
  });
  $(document).on('scroll', function() {
    if ($(document).scrollTop() >= $('body').height() - 30) {
      $('.sticky-nav').fadeIn(200);
    } else {
      $('.sticky-nav').fadeOut(200);
    }
  })
});