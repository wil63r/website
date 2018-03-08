$('.toggle').on('click', function(){
	$('#mobile-nav').toggleClass('mostrar');
	$('.menu').toggleClass('mostrar');
	$('.top-bar').toggleClass('ocultar');
});
(function () {
	'use strict';
	var feed = new Instafeed({
		get: 'user',
		sortBy: 'random',
		limit: '12',
		userId: '1574668298',
		accessToken: '1574668298.1677ed0.057a388dd0b3493abca3a5c373799950',
		clientId: 'f6097aba6ca44311a57712308fae63c3',
		resolution: 'standard_resolution',
		template: '<a href="#image{{id}}" class="zoom"> <figure> <img src="{{image}}" class="thumb" /> </figure> </a> <div id="image{{id}}" class="lightbox"> <a href="#_"> <img src="{{image}}" /> </a> <a href="#_"> <span class="exit">X</span> </a> </div>'
	});
	feed.run();
} ());