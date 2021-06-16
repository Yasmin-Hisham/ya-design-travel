/*global $*/

$(function () {
    
    'use strict';
        
    var myHeader = $('.header .slider'),
		
		placesSlider = $('.places .slider'),
		
		testSlider = $('.testimonials .slider'),
		
		scrollButton = $("#scroll-top");
    
    $(window).resize(function () {
        
        // Adjust Bxslider Image Size
        
        myHeader.each(function () {
        
            $('.header .slider img').css('height', myHeader.height());
        
        });
        
    });
    
    // Adjust Bxslider Image Size
    
    myHeader.each(function () {
        
        $('.header .slider img').css('height', myHeader.height());
        
    });
	
	// Links Add Active Class
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').removeClass('hvr-underline-from-left').siblings().removeClass('active').addClass('hvr-underline-from-left');
        
    });
	
    // Trigger The Header Slider
    
    myHeader.bxSlider({
        
        pager: false,
		
		auto: true,
		
		pause: 10000
        
    });
	
	// Trigger The Header Slider
    
    placesSlider.bxSlider({
        
        controls: false,
		
		slideMargin: 10,
		
		auto: true,
		
		stopAutoOnClick: true,
		
		minSlides: 3,
		
		maxSlides: 3
        
    });
	
	// Trigger The Testimonials Slider
	
	testSlider.bxSlider({
        
        controls: false,
		
		slideMargin: 10,
		
		touchEnabled: false,
		
		auto: true,
		
		stopAutoOnClick: true
        
    });
	
	// Smooth Scroll To Div
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
	
	// Trigger The ScrollTop Button
	
	$(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
        
            scrollButton.show();
        
        } else {
        
            scrollButton.hide();
        
        }
       
    });
    
    // Click On Button To Scroll Top
   
    scrollButton.click(function () {
        
        $("html,body").animate({scrollTop : 0}, 600);
    
    });
        

	// Social Media Animation
	
	$(".footer .col .media").hover(function () {
		$(this).animate({opacity: '1'}, 800);
		
	},
	    function () {
			$(this).animate({opacity: '.5'}, 800);
	    });
	
	
	// Show Menu When Click On The Button
    
    $(".fa-bars").click(function () {
        
        $(".navbar .links").slideToggle();
        
    });
	
});