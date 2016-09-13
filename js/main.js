$(function(){
	// event listener (click) for the light switch (#switch) button
	$('.signin').click( function(e){ signIn(e) });
  $('.submit').click( function(e){ submit(e) });
  $("input[name*='user']").click( function(){ errorClear(this) });
  $("input[name*='pass']").click( function(){ errorClear(this) });
  $('.close').click( function(){ closeModal() });
  $('form').click( function(e){ e.stopPropagation() });
  $('body').click( function(){ closeModal() });

  function signIn(e){
    e.stopPropagation();
    $('.modal').fadeIn('slow')
  };

  function closeModal(){
    $('.modal').fadeOut('slow')
  };

  function submit(e){
    e.preventDefault()
    $('input').each(function (){
      if(!$(this).val()) {
        $(this).addClass('error')
      }
    });
    if(!$('input').hasClass('error')){
      $('.modal').fadeOut('slow')
    }
  };


  function errorClear(inputToClear){

    $(inputToClear).removeClass('error')
  }

});
