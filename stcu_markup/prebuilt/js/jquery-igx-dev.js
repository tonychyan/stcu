$(document).ready(function(){

	// For the page type list
	$('ol.index li a[href$="#"]').parent().addClass('todo');
	$('li.todo').css('opacity', '0.3');

	// Grid column widths
	gridWidth();

});

// Grid column widths
window.onresize = function(event) {
	gridWidth();
}

function gridWidth() {
	$('main div.row > div div.calc').each(function(index) {
		var colWidth = $('main div.row > div').eq(index).width();
		$(this).html(colWidth);
	});
	$('section div.row > div div.calc').each(function(index) {
		var colWidth = $('section div.row > div').eq(index).width();
		$(this).html(colWidth);
	});
}

/*
// Magnific Popup show modal on window load
$(function($) {
	$(window).load(function () {
		$.magnificPopup.open({
			items:{
				src: '#modal'
			},
			alignTop:true,
			closeOnBgClick:false,
			overflowY:'scroll',
			type:'inline'
		}, 0);
	});
});
*/