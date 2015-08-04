$(document).ready(function() {
  /*hamburger icon click */
  $("#sidebar-button").click(function() {
    if ($("#sidebar-button").hasClass("button-active")) {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
    }
  });

  /* hacky var for nav-toggle delayed click effects */
  var i = 0;
  $( "#nav-toggle" ).on( "click", function() {
    if (i % 2 == 0) {
      i += 1;
      setTimeout(function(){
        $( "#nav-toggle" ).toggleClass( "active" );
      }, 800);
    } else {
      i += 1;
      $( "#nav-toggle" ).toggleClass( "active" );
    }
  });

  /* hamburger icon hover effects*/
  $("#nav-toggle").hover(function() {
      $(this).toggleClass("hover");
    }, function() {
      $(this).toggleClass("hover");
    }
  );

/* scrolls the body */
  function scroll() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
      }, 1000);
  }

  $("#about-marker").click(function() {
    scroll();
  })

  /* bouncing arrow click */
  $(".arrow ").click(function() {
      scroll();
      $(".bounce").slideDown(10000, function() {
        $(".bounce").fadeOut("slow", function() {
          //animation complete      
        });
      });
    
  });

  /* arrow reappear */
  $(window).scroll(function() {
    var wS = $(this).scrollTop();
    if (wS == 0) {
        $('.bounce').fadeIn("slow", function() {
            //animation complete
        });
    } else {
        $(".bounce").fadeOut("slow", function() {
          //animation complete
        });
    }
  });
})
