$(document).ready(function() {
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

  /* scroll watcher for bouncing arrow and typer*/
  $(window).scroll(function() {
    var wS = $(this).scrollTop();
    if (wS == 0) {
        $('.bounce').fadeIn("slow", function() {
            //animation complete
        });
        $("#footer-text").text("Last modified: A long time ago");
    } else {
        $(".bounce").fadeOut("slow", function() {
          //animation complete
        });
    }
  
     // start typing if user near bottom of page
     if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        $("#probably").typed({
          strings: [". Probably ^1000."],
          typeSpeed: 200, 
          startDelay: 3000,
          backSpeed: 0,
          loop: false,
          showCursor: true,
          cursorChar: "|",
          attr: null,
          callback: function() {
            setTimeout(function(){
              $(".typed-cursor").css("display", "none");
            }, 2000);
          },
        });
     }
  });
 })
