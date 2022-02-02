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
	slidesPerView: 3,
	slidesPerGroup: 2,
	spaceBetween: 15,
	speed: 600,

	breakpoints: {
		850: {
			slidesPerView: 6.3,
			slidesPerGroup: 5,
			spaceBetween: 15,
		},
		2000: {
			slidesPerView: 7,
			slidesPerGroup: 6,
		},

	},
});