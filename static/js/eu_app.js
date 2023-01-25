//**
// Eu site migrated script file is here (app.js for pages scripting functions)
//**

// import $ from '../js/jquery';
//import $ from '../js/six_storage_home';
// import header from '../js/header';
// import feature from '../js/self-storage_features';


// Navigation toggle
// window.addEventListener('load', function () {
// 	let main_navigation = document.querySelector('#primary-menu');
// 	let main_navigation_toggle = document.querySelector('#primary-menu-toggle');
// 	if (typeof main_navigation_toggle !== 'undefined' && main_navigation_toggle !== null && main_navigation_toggle !== '') {
// 		main_navigation_toggle.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			main_navigation.classList.toggle('hidden');
// 		});
// 	}
// });

// Javascript code start from here..

document.addEventListener('DOMContentLoaded', () => {

	// Slider Loops here

	// var slideIndex = 0;
	// showSlides();
	// var slides, dots;
	// function showSlides() {
	// 	let i;
	// 	slides = document.getElementsByClassName("Slides");
	// 	dots = document.getElementsByClassName("dotButton");
	// 	for (i = 0; i < slides.length; i++) {
	// 		if (slides !== '' && slides !== null) {
	// 			slides[i].style.display = "none";
	// 		}
	// 	}
	// 	slideIndex++;
	// 	if (slideIndex > slides.length) { slideIndex = 1 }
	// 	for (i = 0; i < dots.length; i++) {
	// 		if (dots !== '' && dots !== null) {
	// 			dots[i].className = dots[i].className.replace(" border-blue-700", "");
	// 		}
	// 	}
	// 	if (typeof slides !== 'undefined' && slides !== '' && slides !== null && typeof slides[slideIndex - 1] !== 'undefined' && slides[slideIndex - 1] !== '' && slides[slideIndex - 1] !== null) {
	// 		slides[slideIndex - 1].style.display = "block";
	// 	}
	// 	if (typeof dots !== 'undefined' && dots !== '' && dots !== null && typeof dots[slideIndex - 1] !== 'undefined' && dots[slideIndex - 1] !== '' && dots[slideIndex - 1] !== null) {
	// 		dots[slideIndex - 1].className += " border-blue-700";
	// 	}
	// 	setTimeout(showSlides, 3000); // Change image every 8 seconds
	// }

	// window.currentSlide = (evt, index) => {
	// 	if (index > slides.length) { index = 1 }
	// 	else if (index < 1) { index = slides.length }
	// 	for (i = 0; i < slides.length; i++) {
	// 		if (slides !== '' && slides !== null) {
	// 			slides[i].style.display = "none";
	// 		}
	// 	}
	// 	for (i = 0; i < dots.length; i++) {
	// 		if (dots !== '' && dots !== null) {
	// 			dots[i].className = dots[i].className.replace(" border-blue-700", "");
	// 		}
	// 	}
	// 	slides[index - 1].style.display = "block";
	// 	dots[index - 1].className += " border-blue-700";
	// }

	// tabs function here
	window.tabstorage = (evt, storageName) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			if (tabcontent !== '' && tabcontent !== null) {
				tabcontent[i].style.display = "none";
			}
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			if (tablinks !== '' && tablinks !== null) {
				tablinks[i].className = tablinks[i].className.replace(" border-blue-700 md:border-b-4 pb-2 bg-white rounded-tl-md rounded-tr-md", "");
			}
		}
		document.getElementById(storageName).style.display = "block";
		evt.currentTarget.className += " border-blue-700 md:border-b-4 pb-2 bg-white rounded-tl-md rounded-tr-md";
	}

	window.part_tabstorage = (evt, part_storageName) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("part_tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			if (tabcontent !== '' && tabcontent !== null) {
				tabcontent[i].style.display = "none";
			}
		}
		tablinks = document.getElementsByClassName("part_tablinks");
		for (i = 0; i < tablinks.length; i++) {
			if (tablinks !== '' && tablinks !== null) {
				tablinks[i].className = tablinks[i].className.replace(" bg-white md:border-2 border-dotted border-blue-300", "");
			}
		}
		document.getElementById(part_storageName).style.display = "block";
		evt.currentTarget.className += " bg-white md:border-2 border-dotted border-blue-300";
	}
	// tabs function here
	window.six_Storage_Feature_tabstorage = (evt, storageName) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("six_Storage_Feature_tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			if (tabcontent !== '' && tabcontent !== null) {
				tabcontent[i].style.display = "none";
			}
		}
		tablinks = document.getElementsByClassName("six_Storage_Features_tablinks");
		for (i = 0; i < tablinks.length; i++) {
			if (tablinks !== '' && tablinks !== null) {
				tablinks[i].className = tablinks[i].className.replace(" border-blue-700 border-b-2 pb-2 text-blue-500 tracking-widest", "");
			}
		}
		document.getElementById(storageName).style.display = "block";
		evt.currentTarget.className += " border-blue-700 border-b-2 pb-2 text-blue-500 tracking-widest";
	}


	// Select Option funcion is here
	window.countrySelect = (evt) => {
		let country = document.getElementById('Global');
		let countryGlobal = document.getElementsByClassName('global');
		let countryUsa = document.getElementsByClassName('usa');
		let countryEu = document.getElementsByClassName('eu');
		let countryAustralia = document.getElementsByClassName('australia');
		let countryMena = document.getElementsByClassName('mena');
		let countryAsia = document.getElementsByClassName('asia');
		let countryAfrica = document.getElementsByClassName('africa');
		let parttablink = document.getElementsByClassName('part_tablinks');

		for (let i = 0; i < parttablink.length; i++) {
			console.log(parttablink[i].classList.remove = 'active')
		}
		if (country.value == "Global") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'inline-block';
			}
		} else if (country.value == "USA") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; i < countryUsa.length; i++) {
				countryUsa[i].style.display = 'inline-block';
			}
		} else if (country.value == "EU") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; i < countryEu.length; i++) {
				countryEu[i].style.display = 'inline-block';
			}
		} else if (country.value == "AUSTRALIA") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; i < countryAustralia.length; i++) {
				countryAustralia[i].style.display = 'inline-block'
			}
		} else if (country.value == "MENA") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; countryMena.length; i++) {
				countryMena[i].style.display = 'inline-block';
			}
		} else if (country.value == "ASIA") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; i < countryAsia.length; i++) {
				countryAsia[i].style.display = 'inline-block';
			}
		} else if (country.value == "AFRICA") {
			for (let i = 0; i < countryGlobal.length; i++) {
				countryGlobal[i].style.display = 'none';
			}
			for (let i = 0; i < countryAfrica.length; i++) {
				countryAfrica[i].style.display = 'inline-block';
			}
		}

	}

	// Accordion select function is here


	let accHeading = document.querySelectorAll(".accordion");
	let accPanel = document.querySelectorAll(".accordion_panel");

	for (let i = 0; i < accHeading.length; i++) {
		if(accHeading !=='' && accHeading !==null){
			accHeading[i].onclick = function () {
				if (this.nextElementSibling.style.maxHeight) {
					hidePanels();
				} else {
					showPanel(this);
				}
			};
		}
	}

	window.showPanel = (elem) => {
		hidePanels();
		elem.classList.add("active_faq");
		elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
	}

	window.hidePanels = () => {
		for (let i = 0; i < accPanel.length; i++) {
			accPanel[i].style.maxHeight = null;
			accHeading[i].classList.remove("active_faq");
		}
	}


	//Calculator Accordion select function is here
	let cal_accHeading = document.querySelectorAll(".Cal_accordion");
	let cal_accPanel = document.querySelectorAll(".Cal_accordion_panel");

	for (var i = 0; i < cal_accHeading.length; i++) {
		cal_accHeading[i].onclick = function () {
			if (this.nextElementSibling.style.maxHeight) {
				cal_hidePanels();
			} else {
				cal_showPanel(this);
			}

		};
	}

	window.cal_showPanel = (elem) => {
		cal_hidePanels();
		elem.classList.add("cal_active_faq");
		elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
	}

	window.cal_hidePanels = () => {
		for (var i = 0; i < cal_accPanel.length; i++) {
			cal_accPanel[i].style.maxHeight = null;
			cal_accHeading[i].classList.remove("cal_active_faq");
		}
	}


	// Marketing page Text Typewriter is here

	var span = document.querySelector(".cc-typewriter span");
	var textArr = span.getAttribute("data-text").split(", ");
	var maxTextIndex = textArr.length;

	var sPerChar = 0.15;
	var sBetweenWord = 1.5;
	var textIndex = 0;

	typing(textIndex, textArr[textIndex]);

	function typing(textIndex, text) {
		var charIndex = 0;
		var maxCharIndex = text.length - 1;

		var typeInterval = setInterval(function () {
			span.innerHTML += text[charIndex];
			if (charIndex == maxCharIndex) {
				clearInterval(typeInterval);
				setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000);

			} else {
				charIndex += 1;
			}
		}, sPerChar * 1000);
	}

	function deleting(textIndex, text) {
		var minCharIndex = 0;
		var charIndex = text.length - 1;

		var typeInterval = setInterval(function () {
			span.innerHTML = text.substr(0, charIndex);
			if (charIndex == minCharIndex) {
				clearInterval(typeInterval);
				textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
				setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000);
			} else {
				charIndex -= 1;
			}
		}, sPerChar * 1000);
	}


	// Accordian JS is goes here

	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        if(accHD !=='' && accHD !==null){
			accHD[i].addEventListener('click', toggleItem, false);
		}
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
			if(accItem !=='' && accItem !==null){
				accItem[i].className = 'accordionItem close';
			}
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }







});



