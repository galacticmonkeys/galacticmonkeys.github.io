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
  });
 
   // start typing if hovers over footer 
    $("footer").on("mouseover", function(){
        // delete placeholder cursor
        $("#old-cursor").remove(); 
        
        // start typed.js
        $("#probably").typed({
          strings: [". Probably ^1000 :P"],
          typeSpeed: 100, 
          backSpeed: 0,
          loop: false,
          showCursor: true,
          cursorChar: "|",
          attr: null,
          callback: function() {
            setTimeout(function(){
              $(".typed-cursor").css("display", "none");
            }, 2000);
          }
        });
      })
 })
