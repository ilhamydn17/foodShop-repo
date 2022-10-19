// const slider = document.querySelector('.slider');
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');

// let sectionIndex = 0;

// rightArrow.addEventListener('click', function () {
// 	sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;

// 	slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
// });

// leftArrow.addEventListener('click', function () {
// 	sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;

// 	slider.style.transform = 'translate(' + sectionIndex / 25 + '%)';
// });

// MIE-FAVORIT
const slider = document.querySelector('.slider');
const leftArrowFav = document.querySelector('#left');
const rightArrowFav = document.querySelector('#right');

let indexSlider = 0;

rightArrowFav.addEventListener('click', function () {
	if (indexSlider < 1) {
		indexSlider = indexSlider + 1;
	} else {
		indexSlider = 1;
	}

	slider.style.transform = 'translate(' + indexSlider * -50 + '%)';
});

leftArrowFav.addEventListener('click', function () {
	if (indexSlider > 0) {
		indexSlider = indexSlider - 1;
	} else {
		indexSlider = 0;
	}

	slider.style.transform = 'translate(' + indexSlider * -50 + '%)';
});

// MIE REGULER
const sliderReg = document.querySelector('.slider-reg');
const leftArrowReg = document.querySelector('#left-reg');
const rightArrowReg = document.querySelector('#right-reg');

let indexSliderReg = 0;

rightArrowReg.addEventListener('click', function () {
	if (indexSliderReg < 2) {
		indexSliderReg = indexSliderReg + 1;
	} else {
		indexSliderReg = 2;
	}

	sliderReg.style.transform = 'translate(' + indexSliderReg * -33.3 + '%)';
});

leftArrowReg.addEventListener('click', function () {
	if (indexSliderReg > 0) {
		indexSliderReg = indexSliderReg - 1;
	} else {
		indexSliderReg = 0;
	}

	sliderReg.style.transform = 'translate(' + indexSliderReg * -33.3 + '%)';
});

// MINUMAN
const sliderBev = document.querySelector('.slider-bev');
const leftArrowBev = document.querySelector('#left-bev');
const rightArrowBev = document.querySelector('#right-bev');

let indexSliderBev = 0;

rightArrowBev.addEventListener('click', function () {
	if (indexSliderBev < 2) {
		indexSliderBev = indexSliderBev + 1;
	} else {
		indexSliderBev = 2;
	}

	sliderBev.style.transform = 'translate(' + indexSliderBev * -33.3 + '%)';
});

leftArrowBev.addEventListener('click', function () {
	if (indexSliderBev > 0) {
		indexSliderBev = indexSliderBev - 1;
	} else {
		indexSliderBev = 0;
	}

	sliderBev.style.transform = 'translate(' + indexSliderBev * -33.3 + '%)';
});

const search = document.getElementById('search');
var elementSearch = document.querySelector('.search');

search.addEventListener('click', function () {
	elementSearch.style.transition = '0.2s';
	elementSearch.style.display = 'block';
});

const exitSearch = document.getElementById('exit-search');

exitSearch.addEventListener('click', function () {
	elementSearch.style.display = 'none';
});
