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
        $("#footer-text").text("Last modified: A long time ago");
    } else {
        $(".bounce").fadeOut("slow", function() {
          //animation complete
        });
    }
  
     // start typing if user near bottom of page
     if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        setTimeout(changeText(". Probably.", $("#footer-text"), 750), 3000);
        clearInterval(Otimer);
     }
  });
 
/* 
  function typingHelper(text, target, speed) {
    var arr = text.split("");
    var random = Math.floor(Math.random() * speed);
    var i = 0;
    var typist = function () {
      for (; i < arr.length; i++) {
        if (i == 0) return;
        target.append(arr[i]);
      }
    }
    
    if (i!=0) setInterval(typist, speed);
  };
*/

  function changeText(cont1,cont2,speed){
    var Otext=cont1;
    var Ocontent=Otext.split("");
    var i=0;
    function show(){
      if(i<Ocontent.length)
      {   
        cont2.append(Ocontent[i]);
        i=i+1;
      };
    };
      var Otimer=setInterval(show,speed); 
  };
})
