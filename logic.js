new Swiper('.headerContainer', {

	pagination: {
		el:'.swiper-pagination',
		type: 'progressbar',
	},
	slidesPerView: 1,
	spaceBetween: 20, 
	loop: true,


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
		840: {
			slidesPerView: 7,
			slidesPerGroup: 6,
		},

	},
});