new Swiper('.headerContainer', {
	slidesPerView: 1,
	spaceBetween: 20, 
	loop: true,


	speed: 1100,



});

const slider = document.querySelectorAll('.recomendedBlock__inner');

slider.forEach((el) =>{
	let NewSlider = new Swiper (el, {

		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		observer:true,
		observerParents:true,
		observerSlideChildren:true,

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
	})
});
