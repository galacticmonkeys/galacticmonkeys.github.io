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
})
