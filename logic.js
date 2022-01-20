new Swiper('.headerContainer', {

	pagination: {
		el:'.swiper-pagination',
		type: 'progressbar',
	},
	slidesPerView: 1,
	spaceBetween: 20, 
	loop: true,


	autoplay: {
		delay: 3000, 
		disableOnInteraction: false, //Отключить автопрокрутку после взаимодействия
	},

	speed: 1100,



});

new Swiper ('.recomendedBlock__inner', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 20,
	speed: 600,

	breakpoints: {
		760: {
			slidesPerView: 7,
			slidesPerGroup: 6,
		},

	},
});