$(function() {
  smoothScroll(300);
  $('.menu-toggle').on('click', function(){
    $('.nav-bar').toggleClass('open');
  });
  $('.fancybox').fancybox({
    openEffect  : 'elastic',
    closeBtn: false,
    helpers : {
      title : {type : 'inside'},
      overlay : {css : {'background' : 'rgba(0,0,0,0.7)'} }
    }
  });
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
(function () {
  'use strict';
  var feed = new Instafeed({
    get: 'user',
    sortBy: 'random',
    limit: '12',
    userId: '1574668298',
    accessToken: '1574668298.f6097ab.4c9f0dee55a547e3a7aedbefba42dd01',
    clientId: 'f6097aba6ca44311a57712308fae63c3',
    resolution: 'standard_resolution',
    template: '<a class="fancybox" href="{{image}}"><img class="thumbs" src="{{image}}" /></a>'
  });
  feed.run();
} ());