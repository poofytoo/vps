$(function() {
  $('.me-graphic').fadeIn().css("display","inline-block");
  $('.title-text').delay(100).fadeIn();

  $('.about').on('click', function() {
    $('.content').addClass('content-shrink');
    $('.about').addClass('about-shrink');
  })

  $('.content').on('click', function() {
    $('.content').removeClass('content-shrink');
    $('.about').removeClass('about-shrink');
  })

  $('.look-down').click(function() {
    $('.content').scrollTo($('ul'), 500, {easing:'easeOutQuart',  offset:-30});
  });

  $('.content').on('scroll', function() {
    if ($('.content').scrollTop() >= $('body').height() - 60) {
      $('.sticky-nav').fadeIn(200);
      $('.about').fadeOut(200);
    } else {
      $('.sticky-nav').fadeOut(200);
      $('.about').fadeIn(200);
    }
  })

  $(window).on('resize', function() {
    var activeB = calculateBreakpoint();
    if (activeB != BREAKPOINT) {
      BREAKPOINT = activeB;
      regenerateProjectDetails();
    }
  });

  var BREAKPOINT;

  var calculateBreakpoint = function() {
    if ($('body').width() > 1024) {
      return 3;
    } else if ($('body').width() > 640) {
      return 2;
    } else {
      return 1;
    }
  }
/*
  $('li').on('click', function() {
    $('.project-details-row').slideUp(300);
    $('#' + $(this).data('blockid')).slideDown(300);
    $(document).scrollTo({top:'+=150px', left: 0}, 300);
  });
*/
  $('li').on('click', function() {
    var newLocation = $(this).find('a').attr('href')
    event.preventDefault();
    $('body').fadeOut(200, function() {
      window.location = newLocation;
    });
  });

  var regenerateProjectDetails = function() {
    $('.project-details-row').remove();
    $('.projects-group').remove();
    var counter = 1;
    var lastAddedDiv = 1; 
    $('li').each(function() {
      if (counter%BREAKPOINT == 0) {
        $divContainer = $('<div class="projects-group"></div>');
        for (i = counter; i >= lastAddedDiv; i--) {
          if (i == 1) {
            nSel = 'div:first-child';
          } else {
            nSel = 'div:nth-child('+i+')';
          }
          blockId = $('.project-details-container ' + nSel).data('blockid');
          $pDiv = $('<div class="project-details-row" id="'+blockId+'"></div>');
          $pDiv.html($('.project-details-container ' + nSel).clone());
          $divContainer.append($pDiv.clone());
        }
        $divContainer.insertAfter('ul li:nth-of-type('+(counter)+')')
        lastAddedDiv = counter + 1;
      }
      counter ++;
    })
    counter -= 1;
    if (counter%BREAKPOINT != 0) {
      $pDiv = $('<div class="project-details-row"></div>');
      nSel = 'div:last-child';
      $content = $pDiv.html($('.project-details-container ' + nSel).html());
      $('ul').append($content.html())
    }
  }

  BREAKPOINT = calculateBreakpoint()
  regenerateProjectDetails();

});