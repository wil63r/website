$(function() {
  $('.fancybox').fancybox({
    openEffect  : 'elastic',
    closeBtn: false,
    arrows: true,
    helpers : {
      title : {type : 'inside'},
      overlay : {css : {'background' : 'rgba(0,0,0,0.7)'} }
    }
  });
});
(function () {
  'use strict';
  var feed = new Instafeed({
    get: 'user',
    sortBy: 'random',
    limit: '18',
    userId: '1574668298',
    accessToken: '1574668298.f6097ab.4c9f0dee55a547e3a7aedbefba42dd01',
    clientId: 'f6097aba6ca44311a57712308fae63c3',
    resolution: 'standard_resolution',
    template: '<a class="fancybox" href="{{image}}"><img class="gallery-thumbs" src="{{image}}" /></a>'
  });
  feed.run();
} ());