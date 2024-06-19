// 탑버튼 불편할경우 위치지정 테스트
$(function(){
	$('.top_bt').draggable();

	$('.sub_cont .lnb').draggable();
})

$(function(){
	$('.speed_ul > li > h5').click(function(){
		$(this).parent('li').toggleClass('on');
		$('.speed_lnb').slideToggle();
	})
})

function Size_pc(){
	$('.header .hd_sub .gnb > li').on("mouseenter", function(){
		$(this).find('.dep2').stop().fadeIn(200);
		$('.hd_bg').stop().slideDown(200);
	}).on("mouseleave", function(){
		$('.header .hd_sub .gnb .dep2').stop().fadeOut(200);
	}); 	
	$('.header').on("mouseleave", function(){
		$('.hd_bg').stop().slideUp(200);
	})	
}

function Size_mobile(){
	
}

$(window).load(function(){//사이트 최초 접속 시
	var screen_size = $(window).width();
	if(screen_size > 1024){
		
		Size_pc();
	}else{
		$('.header').off("mouseenter");
		//$('.sub_cont .lnb').click(function(){
		//	$(this).toggleClass('on');
		//})
		
		Size_mobile();
	}
});




$(window).resize(function(){//사이즈 리사이징 시
	var screen_size = $(window).width();
	if(screen_size > 1024){
		Size_pc();
	}else{
		$('.header').off("mouseenter");
		$('.sub_cont .lnb').click(function(){
			$(this).toggleClass('on');
		})
		Size_mobile();
	}
});


function goBack(){
	window.history.back();
}
$(document).ready(function(){
	$(".btn_back_script").bind("click",function(){
		goBack();
	});
});

function layerpopup2(names,url){
	var names = names;
	var pop_width = $(window).outerWidth();
	var pop_height = $(window).outerHeight();
	if(pop_width >= 600){
		pop_width = 600;
	}else if(pop_width < 600 && pop_width > 480){
		pop_width = $(window).width() - 50;
	}else if(pop_width <= 480){
		pop_width = $(window).width() - 50;
	}
	if(pop_height >= 600){
		pop_height = 400;
	}else if(pop_height < 600 && pop_height > 300){
		pop_height = $(window).height() - 50;
	}else if(pop_height <= 300){
		pop_height = $(window).height() - 50;
	}
	$(".layer_popup").dialog({
		resizable : false,
		width : pop_width,
		height : pop_height,
		dialogClass : false,
		modal : true,
		title : names,
		position : {
			my : "center center",
			at : "center center",
			of : window
		},
		open : function(event, ui){
			$("html").css({overflow : "hidden"});
			document.getElementById("lay_pop").innerHTML="<iframe src="+url+" id='uni_iframe'></iframe>";
		},
		beforeClose : function(event,ui){
			$("html").css({overflow : "inherit"});
		},
		show : {
			effect : "drop",
			duration : 800,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 800,
			direction : "up"
		}
	});
}


function layerpopup(names){
	var names = names;
	var pop_width = $(window).outerWidth();
	var pop_height = $(window).outerHeight();
	if(pop_width >= 600){
		pop_width = 600;
	}else if(pop_width < 600 && pop_width > 480){
		pop_width = $(window).width() - 50;
	}else if(pop_width <= 480){
		pop_width = $(window).width() - 50;
	}
	if(pop_height >= 600){
		pop_height = 400;
	}else if(pop_height < 600 && pop_height > 300){
		pop_height = $(window).height() - 50;
	}else if(pop_height <= 300){
		pop_height = $(window).height() - 50;
	}
	$(".layer_popup").dialog({
		resizable : false,
		width : pop_width,
		height : pop_height,
		dialogClass : false,
		modal : true,
		title : names,
		position : {
			my : "center center",
			at : "center center",
			of : window
		},
		open : function(event, ui){
			$("html").css({overflow : "hidden"});
		},
		beforeClose : function(event,ui){
			$("html").css({overflow : "inherit"});
		},
		show : {
			effect : "drop",
			duration : 800,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 800,
			direction : "up"
		}
	});
}


$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.top_bt').toggleClass('sc', scrollTop > 100);
  $('.header').toggleClass('sc', scrollTop > 0);
});


$(function(){
	$('.top_bt').click(function(){
		$('html, body').animate({scrollTop: 0}, 400);
	});
})


//	mv_scroll
function fnMove(seq){
	var offset = $("#mv_scroll" + seq).offset();
	$('html, body').animate({scrollTop : offset.top - 120 + 'px'}, 600);
}



function fnMove0(seq){
	var offset = $("#mv_scrolll" + seq).offset();
	$('html, body').animate({scrollTop : offset.top + 20 + 'px'}, 600);
}


$(function(){
	$('.handle_wrap').click(function(){
		$(this).parent('.mv_news_wrap').toggleClass('on');

	})

})