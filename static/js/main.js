$(function(){

	$('.open_menu').click(function(event) {
		$('.open_menu').addClass('active');
		$('.close_menu').addClass('active');
		$('.change_responsive').addClass('active');
		$('.wrappbody').addClass('active');
		$('.overlay').addClass('active');
	});
	$('.close_menu, .overlay').click(function(event) {
		closeMenuResponsive();
	});

	function closeMenuResponsive(){
		$('.open_menu').removeClass('active');
		$('.close_menu').removeClass('active');
		$('.change_responsive').removeClass('active');
		$('.wrappbody').removeClass('active');
		$('.overlay').removeClass('active');

	}

	$('.header_nav').clone().appendTo('.menu_responsive').removeClass('header_nav').addClass('change_responsive');
	$('.head_cart').clone().appendTo('.menu_responsive').insertBefore('.change_responsive ul');
	$('.head_number').clone().appendTo('.menu_responsive').insertAfter('.change_responsive ul');

	function readDeviceOrientation() {
	    switch (window.orientation) {
	    case 0:
	        break;
	    case 180:
	        break;
	    case -90:
	        break;
	    case 90:
	        break;
	    }
	}
	
	//detectando tablet, celular o ipad
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	
	// dispositivo_movil = $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	  // tasks to do if it is a Mobile Device
	  function readDeviceOrientation() {
		if (Math.abs(window.orientation) === 90) {
			// Landscape
			closeMenuResponsive();
		} else {
			// Portrait
			closeMenuResponsive();
		}
	  }
	  window.onorientationchange = readDeviceOrientation;
	}else{
		$(window).resize(function() {
			var estadomenu = $('.menuResponsive').width();
			if(estadomenu != 0){
				closeMenuResponsive();
			}
		});
	}

	$.fn.andSelf = function() {
	  return this.addBack.apply(this, arguments);
	}

});