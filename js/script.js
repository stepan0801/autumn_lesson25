

const element = document.querySelector('[data-say-hi]');
console.log(element.dataset.sayHi);
const elementTwoo = document.querySelector('[data-say-hi]');
console.log(elementTwoo.getAttribute("data-say-hi"));

const secondElement = document.querySelector('ul>li+li');
console.log(secondElement);
const thirdElement = document.getElementsByClassName('like');
console.log(thirdElement);

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
const windowWidth = window.innerWidth;
console.log(windowWidth);
const scroll = windowWidth - mainElementWidth;
console.log(scroll);


function setScrollToOptions() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	})
}
setTimeout(setScrollToOptions, 1000);


const itemOne = document.querySelector('.form');
const getItemOneCords = itemOne.getBoundingClientRect();
console.log(getItemOneCords);

const itemTwoo = document.querySelector('.content__about');
const getItemTwooCords = itemTwoo.getBoundingClientRect();
console.log(getItemTwooCords);

const itemThree = document.querySelector('.search__link');
const getItemThreeCords = itemThree.getBoundingClientRect();
console.log(getItemThreeCords);

const searchContent = document.querySelector('.search__container');
document.addEventListener("click", search);
function search(event) {
	if (event.target.closest('.search__link')) {
		searchContent.classList.toggle('_active');
	}
	if (!event.target.closest('.search__container')) {
		searchContent.classList.remove('_active');
	}
};

document.addEventListener(
	'keyup', function (event) {
		if (event.code === 'Escape') {
			searchContent.classList.remove('_active')
		}
	});

const txtItem = document.querySelector('.form__input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.content__about span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter()
});

function txtSetCounter() {
	const txtSetResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtSetResult;
};