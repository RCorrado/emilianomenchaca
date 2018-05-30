$(document).ready(function(){

  //Cambiar fondo de la barra de menú al scrollear
  $(window).scroll(function() {
    if($(window).scrollTop() > 200 ) {
      $('nav').css("background", "rgba(4, 132, 159, 1");
    } else{
      $('nav').css("background", "rgb(0, 0, 0, 0)");
    }
  });

  //Animación al clickear sobre enlace menú
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 1300, '');
       return false;
      }
    }
  });

  //Transformar menú hamburguesa en cruz al activar
  $('.button-nav-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.navbar').css("height", "100vh");
      $('.navbar').slideToggle();
      if($('.menuBar a').hasClass('active')){
        $('body').css("overflow", "hidden");
      }
      else{
        $('body').css("overflow", "auto");
      }
  });

  //Cerrar menú al cliquear en li y volver de la cruz al menú hamburguesa
  $('.navbar li a').click(function(){
    $('.navbar').slideUp();
    $('.menuBar a').removeClass('active');
    $('.menuBar a').addClass('button-nav-toggle');
    $('body').css("overflow", "auto");
  });
});