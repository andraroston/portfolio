$(document).ready(function(){

$( ".example" ).hover(
  function() {
    $( this ).addClass( "on" );
  }, function() {
    $( this ).removeClass( "on" );
  }
);

$( ".logo" ).hover(
  function() {
    $( this ).addClass( "on" );
  }, function() {
    $( this ).removeClass( "on" );
  }
);

})