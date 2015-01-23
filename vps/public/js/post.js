$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(200);

  // Link Images
  $('img').each(function() {
    $this = $(this);
    if (!$this.parent().hasClass('slideshow') && $this.parent().attr('href') == undefined) {
      $this.wrap('<a></a>');
      $this.parent().attr('href', $this.attr('src'))
    }
  });

  // Slideshow Builder
  // Place <img> tags in a 'slideshow' div and watch it auto generate! Dang!
  
  var $sliderForDiv = $('<div class="slider-for"></div>');
  var $sliderNavDiv = $('<div class="slider-nav"></div>');
  $('.slideshow').children().each(function() {
    $sliderForDiv.append('<div>'+$(this)[0].outerHTML+'</div>')
    $sliderNavDiv.append('<div>'+$(this)[0].outerHTML+'</div>')
  });
  $('.slideshow')
    .html('')
    .append($sliderForDiv)
    .append($sliderNavDiv);

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    responsive: true,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    responsive: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });


});