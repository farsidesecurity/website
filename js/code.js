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

    $(".facebookBtn").click(function(){
      $(this).text($(this).text() == 'Open Comments' ? 'Close Comments' : 'Open Comments');
      $(this).closest('.featuredContainer').find('.facebook').slideToggle(300);

   });

    $('.hamburger').click(function() {
        $('.navRight').slideToggle(200);
    })

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


    $('#appleTabs, #samsungTabs, #sonyTabs').tabs();


})
