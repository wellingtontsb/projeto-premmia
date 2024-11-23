//CODIGO PARA O FUNCIONAMENTO DOS SLIDES DA BANNER SECTION
let totalSlides = document.querySelectorAll('.slide').length;
let slideArea = document.querySelector('.container').clientWidth;
let dotsSlide = document.querySelector('.banner-points').children;
let dots = document.querySelectorAll('.point');
let currentSlide = 0;

//calcula o tamanho do width automaticaticamente
document.querySelector('.sliders').style.width = `calc(${slideArea} * ${totalSlides})`;

//insere o tamanho da altura dos botoes next e prev automaticamente
document.querySelector('.slider-banner-controls').style.height = `${document.querySelector('.banner-slide').clientHeight}px`;
//document.querySelector('.slider-offers-controls').style.height = `${document.querySelector('.offers').clientHeight}px`;

function goPrev() {
	dotsSlide[currentSlide].classList.remove('active');
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = totalSlides - 1;
	}
	dotsSlide[currentSlide].classList.add('active');
	updateMargin();
}

function goNext() {
	dotsSlide[currentSlide].classList.remove('active');
	currentSlide++;
	if (currentSlide > (totalSlides - 1)) {
		currentSlide = 0;
	}
	dotsSlide[currentSlide].classList.add('active');
	updateMargin();
}

function updateMargin() {
	let sliderItemWidth = document.querySelector('.slide').clientWidth;
	let newMargin = currentSlide * sliderItemWidth;
	document.querySelector('.slide').style.marginLeft = `-${newMargin}px`;
}

dots.forEach((item, index)=>{
	item.addEventListener('click', ()=>{
		dotsSlide[currentSlide].classList.remove('active');
		item.classList.add('active');
		currentSlide = index;
		updateMargin();
	});
});

//funcao para mudar os slides automaticamente

/*
setInterval(()=>{
	updateMargin();
	goNext();
}, 5000);
*/


//CODIGO PARA O FUNCIONAMENTO DOS SLIDES DA OFFERS SECTION
let offersSlide = document.querySelectorAll('.offers-slide').length;
let currentOffersSlide = 0;

document.querySelector('.offers-sliders').style.width = `calc(${slideArea} * ${offersSlide})px`;

function goPrevOffers(){
	currentOffersSlide--;
	if (currentOffersSlide < 0) {
		currentOffersSlide = offersSlide - 1;
	}
	updateMarginOffers();
}

function goNextOffers(){
	currentOffersSlide++;
	if (currentOffersSlide > (offersSlide - 1)) {
		currentOffersSlide = 0;
	}
	updateMarginOffers();
}

function updateMarginOffers(){
	let offerSlideWidth = document.querySelector('.offers-slide').clientWidth;
	let newMarginOffer = currentOffersSlide * (offerSlideWidth + 36);
	document.querySelector('.offers-slide').style.marginLeft = `-${newMarginOffer}px`;
}