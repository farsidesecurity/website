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

    $('.appleBtn').click(function() {
        $('#appleOption').slideToggle(300);
        $('#samsungOption').slideUp(300);
        $('#sonyOption').slideUp(300);
    });
    $('.samsungBtn').click(function() {
        $('#samsungOption').slideToggle(300);
        $('#appleOption').slideUp(300);
        $('#sonyOption').slideUp(300);
    });
    $('.sonyBtn').click(function() {
        $('#sonyOption').slideToggle(300);
        $('#samsungOption').slideUp(300);
        $('#appleOption').slideUp(300);
    });


    $('#appleTabs, #samsungTabs, #sonyTabs').tabs();


})
