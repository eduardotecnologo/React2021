// Scroll da Página inicial
$(document).ready(function() {
  $(document).on('click','a[href^="#"]', function(e){
    let id = $(this).attr('href')
    let target = $(id)
    if(target.length === 0){
      return;
    }
    e.preventDefault()
    $('body, html').animate({
      scrollTop: target.offset().top
    });
  });
});