$(document).ready( function() {
  var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      isFitWidth: true,
      columnWidth: '.grid-sizer',
      gutter: 10
    }); 

  // masonry init
  $('.grid').imagesLoaded(function() {
    $grid.masonry();  
  });
});

