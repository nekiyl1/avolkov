$('.works__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows : true,
	variableWidth : false
});

$('button[class$="__call"]').on('click', function() {
	alert('Позвони!');
});

$('button[class$="__learn-more"]').on('click', function() {
	alert('Узнай!');
});