var $ = require('jquery');

$('.head').removeClass('green');

  $('.head').on('click', function(e){
    if ($(this).children().hasClass('hide')){
      $(this).children().toggleClass('hide');
      $(this).siblings().children().addClass('hide');
    }else {
      $(this).children().toggleClass('hide');
    }
  });
