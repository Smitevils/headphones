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