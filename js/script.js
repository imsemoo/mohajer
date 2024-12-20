$(document).ready(function() {
    $('.ticker ul').hover(
      function() {
        $(this).css('animation-play-state', 'paused');
      },
      function() {
        $(this).css('animation-play-state', 'running');
      }
    );

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
    
        nav: true,
        rtl: true,
        navText: [
          '<i class="fas fa-chevron-right"></i>',
          '<i class="fas fa-chevron-left"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });


  });