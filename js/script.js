$('.works__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	variableWidth: false,
	responsive: [
		{
			breakpoint: 1336,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 380,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}]
});

$('button[class$="__call"]').on('click', function () {
	$('.modal-form').css('display', 'block');
	var close = $('.modal-form__close');
	close.on('click', function () {
		$('.modal-form').css('display', 'none');
	});
	var send = $('.modal-form__send');
	send.on('click', function () {
		$('.modal-form').css('display', 'none');
	});
	$(window).click(function (e) {
		if (e.target.className === 'modal-form')
			$('.modal-form').css('display', 'none');
	});
});

$('button[class$="__learn-more"]').on('click', function () {
	$('.modal-form').css('display', 'block');
	var close = $('.modal-form__close');
	close.on('click', function () {
		$('.modal-form').css('display', 'none');
	});
	var send = $('.modal-form__send');
	send.on('click', function () {
		$('.modal-form').css('display', 'none');
	});
	$(window).click(function (e) {
		if (e.target.className === 'modal-form')
			$('.modal-form').css('display', 'none');
	});
});

$('.header__mobile-menu').on('click', 'a', function (event) {
	event.preventDefault();
	var mobileId = $(this).attr('href'), top = $(mobileId).offset().top;
	$('body,html').animate({ scrollTop: top }, 1500)
});

$('.header__mobile-menu-button').on('click', function (event) {
	event.preventDefault();
	$('.header__mobile-menu').slideToggle(100);
});

$('.header__mobile-menu a').on('click', function (event) {
	event.preventDefault();
	$('.header__mobile-menu').hide();
});