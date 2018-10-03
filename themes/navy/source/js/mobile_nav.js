$(document).ready(function () {

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  $(window).on('resize', function(event) {
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setMenu(w);
  });

  function setMenu(w){
    if (w < 1199) {
      $('.header header').appendTo('.mobile-menu-container .ecosystem');
      $('.header .secondary-nav').appendTo('.mobile-menu-container .community');
    }else{
      $('.mobile-menu-container header').appendTo('.header .header-left');
      $('.mobile-menu-container .secondary-nav').insertAfter('.header .header-left');
    };
  }

  setMenu(w);

  $('.mobile-menu-trigger, .backdrop, .mobile-menu-container .close').on('click', function () {
    $('body').toggleClass('open');
  });
  
});
