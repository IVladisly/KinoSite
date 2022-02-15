new Swiper('.headerContainer', {
	slidesPerView: 1,
	spaceBetween: 20, 
	loop: true,


	speed: 1100,




});

const slider = document.querySelectorAll('.recomendedBlock__inner');
const sliderActor = document.querySelectorAll('.actorInfoMainBlock');

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
sliderActor.forEach((el) =>{
	let NewSlider = new Swiper (el, {

		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		observer:true,
		observerParents:true,
		observerSlideChildren:true,

		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 15,
		speed: 400,

		breakpoints: {
			850: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 25,
			},
			

		},
	})
});


const popupLink = document.querySelector('.popupLink');
const popupContent = document.querySelector('.popupContent');
const popupActive = document.querySelector(".popupSearch");
const popupClose = document.querySelector(".popupClose");




popupLink.addEventListener('click', function(){
	popupActive.classList.add('open');
	popupContent.classList.add('open');
	document.body.style.overflow = 'hidden';
});

popupClose.addEventListener('click', function(){
	popupActive.classList.remove('open');
	popupContent.classList.remove('open');
	document.body.style.overflow = 'visible';

	
});


document.querySelector('.searchInput').oninput = function(){
	let val = this.value.trim().toUpperCase();
	let searchMenu = document.querySelectorAll('.searchMenu ol');
	if (val !=''){
		searchMenu.forEach(function(elem){
			if(elem.innerText.toUpperCase().search(val) == -1){
				elem.classList.add('hide');
				elem.innerHTML = elem.innerText;
			}else {
				elem.classList.remove('hide');
				let str = elem.innerText;
				elem.innerHTML = DetectedText(str, elem.innerText.toUpperCase().search(val), val.length);
			}
		})
	}else {
		searchMenu.forEach(function(elem){
			elem.classList.remove('hide');
			elem.innerHTML = elem.innerText;
		});
	}
}

function DetectedText(string, pos, len){
	return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
}