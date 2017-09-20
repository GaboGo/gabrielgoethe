jQuery(function($){
	//Load
		$(".portfolio .items").slick({
			centerMode: true,
			slidesToShow: 3,
			responsive: [
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	
	// Button Menu
		$(".button-menu").click(function(){
			if ( $(this).hasClass('active') ){
				$(this).removeClass('active');
				$("nav.menu").removeClass('mobile-active');
			}else{
				$(this).addClass('active');
				$("nav.menu").addClass('mobile-active');
			}
		});
	
	// Intro Height
		if( $(window).width() < 580 ){
			var heightTotal = $(window).height();
			$(".intro").css("height", heightTotal);
		}else{
			$(".intro").css("height", "100vh");
		}

		$(window).resize(function(){
			var heightTotal = $(window).height();
			$(".intro").css("height", heightTotal);
			console.log("heightTotal", heightTotal);
		});
	
	//Scroll
		$(window).scroll(function(){
			var scrollGoTop = $(window).scrollTop();
			var headerTop = $('#about').offset().top;
			var headerOffset = (headerTop - scrollGoTop);
			if(headerOffset < 10){
				$(".header-fixed").addClass("active");
			}else{
				$(".header-fixed").removeClass("active");
			}
		});
	
	//Offset
		$("#intro .down").click(function(){
			$('html, body').animate({scrollTop: $("#about").offset().top }, 'slow');
		});

		$(".offsetElements .item, .header-fixed .logo").click(function(){
			$(".offsetElements .item").removeClass("active");
			$(this).addClass("active");
			var dataElement = $(this).attr("data-position");
			$('html, body').animate({scrollTop: $("#" + dataElement).offset().top }, 'slow');
		});
	
	//ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$(".detail").removeClass("active");
				$('html, body').css("overflow","initial");
			}
		});
	
	//Read More
		$(".portfolio .more, .portfolio figure").click(function(){
			$(".detail").addClass("active");
			var imageUrl = $(this).attr('data-image');
			var nameProject = $(this).attr('data-title');
			$(".detail h2").html(nameProject);
			$(".detail .image").empty().append("<img src='../images/projets/" + imageUrl + "'/>");

			$('html, body').css("overflow","hidden");
		});

		$(".detail .close, .detail .overlay").click(function(){
			$(".detail").removeClass("active");
			$('html, body').css("overflow","initial");
		});

	//Go to top
		$(".goTop").click(function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});
});
