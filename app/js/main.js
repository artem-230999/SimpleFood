$(document).ready(function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 50) {
			$(".header").addClass("header--fixed");
		}
		else {
			$(".header").removeClass("header--fixed");
		}
	})
});

var mixer = mixitup('.categories__list');