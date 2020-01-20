$(document).ready(function() {

  $('.dropdown-parent').hover(function(){
    $('.dropdown').hide();
    $(this).children('ul').show();
    // $(this).siblings().children('ul').hide();
  });

  $('ul li').hover(function(){
    $('ul li a').removeClass('black');
    $(this).children('a').addClass('black');
  });

  $(document).click( function(event){
    $(".dropdown").hide();
  });


});
