$(document).ready( function() {

  var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      isFitWidth: true,
      columnWidth: '.grid-sizer',
      gutter: 30 
    }); 

  // masonry init
  $('.grid').imagesLoaded(function() {
    $grid.masonry();  
  });

  // fancybox init
  $(".fancybox").fancybox();

  $(".fancybox").fancybox({
      beforeLoad: function() {
        this.title = $(this.element).children(".caption")[0].innerHTML;
      },
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        title : {
          type : 'inside'
        }
      },
      afterShow: function() {
        var link = $(this.element).children(".link")[0].innerHTML;
        $(".fancybox-image").wrap('<a href="' + link + '" />')
      },
      scrolling: 'yes'   
  });
});

