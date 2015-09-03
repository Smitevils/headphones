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

/* меню */
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


/* Кнопка заказать на всех страницах скроллит к блоку заказа */
$('.button').click(function() {
	$.fn.fullpage.moveTo(7);
	$('nav ul li').removeClass('active');
	$('nav ul li').eq(4).addClass('active');
});

/* скрипт обработки формы */

$('input[type="submit"]').click(function(event) {
	event.preventDefault();
	if (($('form').find('input[name="name"]').val() == "") || ($('form').find('input[name="phone"]').val() == "")) {
		if ($('form').find('input[name="name"]').val() == "") {
			$('input[name="name"]').css('border-color', '#af0000');
		}
		if ($('form').find('input[name="phone"]').val() == "") {
			$('input[name="phone"]').css('border-color', '#af0000');
		}
	} else {
		sentAjaxMail();
	}
});

$('input[type="text"], textarea').click(function() {
	$('input[type="text"]').css('border-color', '#fff');
});

/* Отправка сообщения */
function sentAjaxMail() {
	var type = $('form').attr('method');
	var url = $('form').attr('action');
	var name = $('form').find('input[name="name"]').val();
	var phone = $('form').find('input[name="phone"]').val();
	var comment = $('form').find('textarea[name="comment"]').val();
	/* Ajax */
	$.ajax({
		type: type,
		url: url,
		data: {
			name: name,
			phone: phone,
			text: comment
		},
		success: function(data) {
			$('.order-block h1, .order-block h4, .order-block form').addClass('zoomOutLeft animated');
			$('.request').css('display', 'block');
			$('.request').addClass('zoomInRight animated');
			
		}
	});
}

$(document).ready(function() {
	$('input[name="phone"]').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
});


/****************/

$(document).ready(function() {
	$('.galery-slider').slick({
		infinite: true,
		centerMode: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1400,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		]
	});
});