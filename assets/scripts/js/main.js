$('.share').hover(function() {
	$(this).hide();
	// $('.socials').css('display', 'block');
	$('.socials').css('opacity', '1');
	$('.socials').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
}, function() {
	/* Stuff to do when the mouse leaves the element */
});

$('.socials').hover(function() {
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(this).css('opacity', '0');
	$('.socials').css('transform', 'matrix(0.7, 0, 0, 0.7, 0, 0)');
	$('.share').show();
});


$('#to-section-1').click(function() {
	$.fn.fullpage.moveTo(2);
	$('nav ul li').removeClass('active');
	$('nav ul li').eq(0).addClass('active');
});
$('#to-section-5').click(function() {
	$.fn.fullpage.moveTo(5);
	$('nav ul li').removeClass('active');
	$('nav ul li').eq(1).addClass('active');
});
$('#to-section-6').click(function() {
	$.fn.fullpage.moveTo(6);
	$('nav ul li').removeClass('active');
	$('nav ul li').eq(2).addClass('active');
});
$('#to-section-7').click(function() {
	$.fn.fullpage.moveTo(7);
	$('nav ul li').removeClass('active');
	$('nav ul li').eq(4).addClass('active');
});




