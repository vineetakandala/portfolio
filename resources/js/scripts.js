$(document).ready(function() {

    /*Navbar toggle closes on clicking on a link*/
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
    
    /*Carousel timer*/
    $('.carousel').carousel({
        interval: 10000
    });
    
    /*For the sticky navigation*/
    $('.js--section-about').waypoint(function(direction) {
      if(direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      } 
    }, {
        offset: '10px;'
    });
    
    /*Scroll on buttons*/
    $('.js--know-more').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000) 
    });
    
    /*Navigation Scroll*/
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /*Flip project image on click*/
    
    $("#card1").flip({
        trigger: 'click'
    });
    
    $("#card2").flip({
        trigger: 'click'
    });
    
    $("#card3").flip({
        trigger: 'click'
    });
    
    $("#card4").flip({
        trigger: 'click'
    });
    
    $("#card5").flip({
        trigger: 'click'
    });
    
    $("#card6").flip({
        trigger: 'click'
    });    
    
});