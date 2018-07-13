$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('nav').addClass('change');
        }
        else {
            $('nav').removeClass('change');
        }
    });

    var headerHeight = $('nav').outerHeight();
	$('.smooth-scroll').click(function(e) {
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight + 1
		}, 700);
		e.preventDefault();
	})

    $('.hamburger').click(function() {
        $('.navRight').slideToggle(200);
    })

})
