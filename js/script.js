"use strict"

const searchMain = document.querySelector('.search-page');
const searchButton = searchMain.querySelector('.btn-open');
const searchForm = searchMain.querySelector('.search-page__form');

function openSearch() {
	searchMain.classList.toggle('_search-open');
}

document.addEventListener("click", function(e) {
	if (e.target.closest('.btn-open')) {
		openSearch();
	}
	if (!e.target.closest('.btn-open') && !e.target.closest('.search-page__form') && searchMain.classList.contains('_search-open')) {
		openSearch();
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key === 'Escape' && searchMain.classList.contains('_search-open')) {
		openSearch();
	}
})

const inputSearch = searchMain.querySelector('.input');
const textInputMax = inputSearch.getAttribute('maxlength');
const textCounter = searchMain.querySelector('.counter span');
textCounter.innerHTML = textInputMax;

inputSearch.addEventListener("keyup", txtSetCounter)

function txtSetCounter () {
	const txtCounterResult = textInputMax - inputSearch.value.length;
	textCounter.innerHTML = txtCounterResult;
}