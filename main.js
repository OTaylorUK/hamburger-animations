function scrollUpdate() {

	if (!$('.navigation-container').hasClass('active')) {
		if (scrollDown === true) {
			$('.header-container').addClass('scrolled');
		} else if (scrollDown === false) {
			$('.header-container').removeClass('scrolled');
		}
	}

}

// EVENT LISTENERS //
$(document).on("click", '.hamburger-container', function (e) {
	e.stopPropagation();
	if ($(this).hasClass('active')) {

		$(this).addClass('animate-reverse');
		$(this).removeClass('active');
		$('.navigation-container').removeClass('active');


	} else {
		$(this).removeClass('animate-reverse');
		$(this).addClass('active');
		$('.navigation-container').addClass('active');

	}

});
