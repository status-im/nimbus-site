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

  $('.mobile-menu-trigger, .backdrop, .mobile-menu-container .close').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('open');
    $('body').removeClass('open-submenu');
  });

  $('.mobile-menu-container .mobile-submenu-container-inner .mobile-menu-header .back').on('click', function (event) {
    event.preventDefault();
    $('body').removeClass('open-submenu');
  });

  $('.mobile-menu-container-inner .has-submenu .main-link').each(function (index, element) {
    $(this).on('click', function (event) {
      event.preventDefault();
      var cloneSubMenu = $(this).parent().find('.sub-menu ul').clone(),
          subMenuTitle = $(this).text();
      $('.mobile-menu-container .mobile-submenu-container-inner .dropdown nav').empty();
      $('body').addClass('open-submenu');
      cloneSubMenu.appendTo('.mobile-menu-container .mobile-submenu-container-inner .dropdown nav');
      $('.mobile-menu-container .mobile-submenu-container-inner .title').text(subMenuTitle);
    });
  });
  
});
