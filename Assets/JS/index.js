$(document).ready(function() {
    $('.card').click(function() {
        $(this).toggleClass('flipped');
        $(this).children().toggleClass('name');
    });
  });

  





/*  Code used for toggling class to flipped.
    $('.card').click(function() {
        $(this).toggleClass('flipped');
    })
});






/*

$(document).ready(function() {

$('.box').hasClass('.notflipped');

if $('.box').click(function( ) {
       $(this).addClass('.flipped');

else $('.box').click(function() {

}
     });
*/
