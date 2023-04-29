$(document).ready(function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 500) {
			$(".header").addClass("header--fixed");
		}
		else {
			$(".header").removeClass("header--fixed");
		}
	})
});

var mixer = mixitup('.categories__list');