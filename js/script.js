$(document).ready(function(){
  $('.formOne').submit(function(event){
    var nameInput = $('input#name').val();

    $('.name').text(nameInput);

    $('#letter').show();

    event.preventDefault();
  });
  $('.formTwo').submit(function(event){
    var respondInput = ('input#respond').val();

    $('.respond').text(respondInput);

    $('#responseLetter').show();

    event.preventDefault();
  });
});
