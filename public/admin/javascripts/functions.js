jQuery(function($){
  function autoLoad(){
		var wT = $(window).width();
		var hT = $(window).height();
    var hLogin = $('.loginForm').height();
		$('.loginForm').css('top' , (hT-(hLogin+80)) / 2);
	}
	autoLoad();

	$(window).resize(function(){
		autoLoad();
	});

  //Menu style
  var swMenuSt = 0;
  $(".topBar .menuButton").click(function(){
    if(swMenuSt == 0){
      $("header, .topBar").addClass("minBar");
      swMenuSt = 1;
    }else{
      $("header, .topBar").removeClass("minBar");
      swMenuSt = 0;
    }
  });

  //Menu click items
  $("header .menu .item").click(function(){
    $("header .menu .item").removeClass("active");
    $(this).addClass("active");
  });
});
