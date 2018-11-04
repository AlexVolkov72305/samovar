import $ from 'jquery';
import Popper from 'popper.js';

// import '@fancyapps/fancybox/dist/jquery.fancybox.min';

// import 'owl.carousel/src/js/owl.carousel';
// import 'owl.carousel/src/js/owl.navigation';

import 'bootstrap';

// import 'bootstrap/js/src/util';
// import 'bootstrap/js/src/alert';
// import 'bootstrap/js/src/button';
// import 'bootstrap/js/src/carousel';
// import 'bootstrap/js/src/collapse';
// import 'bootstrap/js/src/dropdown';
// import 'bootstrap/js/src/index';
// import 'bootstrap/js/src/modal';
// import 'bootstrap/js/src/popover';
// import 'bootstrap/js/src/scrollspy';
// import 'bootstrap/js/src/tab';
// import 'bootstrap/js/src/tooltip';

import './scripts/main_menu';


// Scroll to element
function scrollToElement(elem, toFrontPage = false) {

	elem.on('click', function(e) {

		let section = $($(this).attr('href'));
		if (section.length === 0 && toFrontPage) {
			window.location.href = theme.url + $(this).attr('href');
			e.preventDefault();
		} else if (section.length > 0) {
			let wpadminbar_height = ($('#wpadminbar').length == 1) ? $('#wpadminbar').height() : 0;
			if ($(document).scrollTop() <= section.offset().top) {
				$('html,body').animate({ 'scrollTop': section.offset().top - wpadminbar_height }, 500, 'swing');
			}

			// history.pushState("", document.title, window.location.pathname);
			window.location.href.substr(0, window.location.href.indexOf('#'));
			e.preventDefault();
		}
	})
}
