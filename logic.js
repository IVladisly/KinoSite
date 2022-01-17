new Swiper('.headerContainer', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el:'.swiper-pagination',
		type: 'progressbar',
	},
	slidesPerView: 1,
	spaceBetween: 20, 
	loop: true,


	// autoplay: {
	// 	delay: 3000, 
	// 	disableOnInteraction: false, //Отключить автопрокрутку после взаимодействия
	// },

	speed: 1100,



});