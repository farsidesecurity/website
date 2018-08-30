$(function() {

    // Change navigation colours
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('nav').addClass('change');
        }
        else {
            $('nav').removeClass('change');
        }
    });

    // Smooth Scroll
    var headerHeight = $('nav').outerHeight();
	$('.smooth-scroll').click(function(e) {
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight + 1
		}, 700);
		e.preventDefault();
	})

    // Smooth Scroll with Delay
    var headerHeight = $('nav').outerHeight();
	$('.smooth-scroll-Delay').click(function(e) {
		var linkHref = $(this).attr('href');
		setTimeout(function() {
            $('html, body').animate({
    			scrollTop: $(linkHref).offset().top - headerHeight + 1
    		}, 700);
        }, 500)
        e.preventDefault();
	})

    // Open and Close Facebook btns
    $(".facebookBtn").click(function(){
        $(this).text($(this).text() == 'Open Comments' ? 'Close Comments' : 'Open Comments');
        $(this).closest('.featuredContainer').find('.facebook').slideToggle(300);
    });

    // Toggle mobile naviation
    $('.hamburger').click(function() {
        $('.navRight').slideToggle(200);
    })

    // Toggle dropdown on mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.dropDownAnchor').click(function() {
            $('.dropDown').slideToggle(200);
        })
    }

    // Repair Buttons
    $('.appleBtn').click(function() {
        $('#appleOption').slideToggle(300);
        $('#samsungOption').slideUp(300);
        $('#sonyOption').slideUp(300);
        $('#desktopOption').slideUp(300);
    });
    $('.samsungBtn').click(function() {
        $('#samsungOption').slideToggle(300);
        $('#appleOption').slideUp(300);
        $('#sonyOption').slideUp(300);
        $('#desktopOption').slideUp(300);
    });
    $('.sonyBtn').click(function() {
        $('#sonyOption').slideToggle(300);
        $('#samsungOption').slideUp(300);
        $('#appleOption').slideUp(300);
        $('#desktopOption').slideUp(300);
    });
    $('.desktopBtn').click(function() {
        $('#desktopOption').slideToggle(300);
        $('#sonyOption').slideUp(300);
        $('#samsungOption').slideUp(300);
        $('#appleOption').slideUp(300);
    });

    // Repair Tabs
    $('#appleTabs, #samsungTabs, #sonyTabs').tabs();


})
