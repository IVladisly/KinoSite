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



const ratingObject = document.querySelectorAll(".ratingPercent");
const ratingBarObject = document.querySelectorAll(".rating");
let i = 0;
for (const item of ratingObject){


let rating = ratingObject[i].textContent;
ratingBarObject[i].style.width = rating;
console.log(rating);


if (rating <= "20%") {
	ratingObject[i].classList.add('bad');
	ratingBarObject[i].classList.add('bad');
}else if (rating <= "40"){
	ratingObject[i].classList.add('belowmiddle');
	ratingBarObject[i].classList.add('belowmiddle');
}else if (rating <= "60") {
	ratingObject[i].classList.add('good');
	ratingBarObject[i].classList.add('good');
}else if (rating <= "80") {
	ratingObject[i].classList.add('good');
	ratingBarObject[i].classList.add('good');
}

i++;



 }


		
 

