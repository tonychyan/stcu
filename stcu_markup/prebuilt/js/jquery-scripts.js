$(document).ready(function(){

	// Toggle search box
	// $('header a.search').click(function (e) {
	// 	e.preventDefault();
	// 	$('header form.search').show().animate({width:'200px'});
	// 	$('header form.search input[type=text]').focus();
	// 	$('header div.nav').fadeOut();
	// });
	$(document).mouseup(function (e) {
		var container = $('header form.search');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide().removeAttr('style');
			$('header div.nav').removeAttr('style');
		}
	});
	// Main NAV control
	$('.nav-dropdown span.close').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.nav-dropdown-wrap').slideUp();
	});
	$('.main-nav > li').click(function (e) {
		e.preventDefault();
		var rel = $(this).attr('value');
		$('.nav-dropdown-wrap').hide();
		$(".nav-dropdown-wrap[value="+ rel +"]").slideDown();
	});
	

	// Mobile menu toggle
	$('span.menu').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('opened');
		$('nav').slideToggle();
	});

	// Mobile site nav toggle
	$('h3.nav-toggle span').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('opened');
		$(this).parent().next().slideToggle();
	});
	$('nav ul.mobile > li > a').click(function (e) {
		e.preventDefault();
		$(this).parent().find('.mobile-sub-wrap').slideToggle();
	});
	$('.mobile-sub-back').click(function (e) {
		e.preventDefault();
		$(this).parents('.mobile-sub-wrap').slideUp();
	});
	
	// Scroll to top
	$('a[href="#top"]').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '600');
	});

	// Button box toggle-inline
	$('div.button-box > a').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).next().slideToggle(100);
	});


	// Sumo Select plugin
	$('select').SumoSelect();

	// ScrollTabs plugin
	$('.scrolltabs').scrollTabs();

	// Tabs
	$('div.tab-wrap div.tab').hide();
	$('div.tab-wrap div:first-child').show();
	$('span.scroll_tab_first').addClass('active');

	$('span.tab-nav').click(function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('div.tab-wrap div.tab').hide();
		var activeTab = $(this).attr('href');
		$(activeTab).show();
	});

	// Youtube Popup
	$('.mp-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

});

// IF resize happens
var width = $(window).width();
$(window).resize(function () {
	if($(window).width() != width){

		$('header span.menu').removeClass('opened');
		$('header div.nav').removeAttr('style');
		$('header form.search').removeAttr('style');
		$('nav').removeAttr('style');
		$('main div.nav').removeAttr('style');
		$('main h3.nav-toggle span').removeClass('opened');

		width = $(window).width();
	}
});

$(window).ready(function () {
	supportPosition()
});
$(window).resize(function () {
	supportPosition()
});

function supportPosition() {
	$('div.support').show();
	if (window.matchMedia('(min-width: 992px)').matches) {
		var browserWidth = $('#page').width();
		var containerWidth = $('section.banner div.container').width();
		var offset = (browserWidth - containerWidth) / 2
		$('div.support').appendTo('div.support-location-1').css('right', offset);
	} else {
		$('div.support').prependTo('div.support-location-2');
	}
}

$(window).load(function(){

	// Scrollbar
	$('.scroll').mCustomScrollbar();

});