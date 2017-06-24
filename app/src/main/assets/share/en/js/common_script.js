/*--------------------------------------------------------------------------------------------------------------------------------
//	DATE : 2016-07-14
//	AUTH : 김선엽 (ariesmilk@jjworx.com)
//  PATH : /share/js/common_script.js
//	DESC : 공통 스크립트
//	COPYRIGHT : JJ WORX
//--------------------------------------------------------------------------------------------------------------------------------*/


$(document).ready(function(){
	//*** variables
	var quick_top		 = parseInt($("#quick").css("top"));		// 퀵메뉴 현재스크롤값
	var window_width	 = typeof(window.innerWidth)!='undefined' ? window.innerWidth : $(window).width();	// 브라우저 너비
	var mobile_width	 = 799;		// 모바일로 판별할 너비
	var animate_speed	 = 500;		// 에니메이션 속도(ms)


	//*** binding
	// 전체메뉴(사이트맵) 버튼 클릭
	$(document).on('click', '#open_nav_link, .open_nav_link', function(e){
		e.preventDefault()
		$("#open_nav").slideToggle(250);
	});

	// 퀵메뉴 스크롤	
	$(window).on('scroll', function(e){
		$("#quick").stop().animate({ top: quick_top+$(window).scrollTop() }, animate_speed, 'easeOutCubic');
	});

	// GO_TOP 버튼 클릭
	$(document).on('click', '.go_top', function(e){
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: 0 }, animate_speed, 'easeOutCubic');
	});

	// GO_TOP 버튼 토글
	$(window).on('resize scroll', function(e){
		window_width	 = typeof(window.innerWidth)!='undefined' ? window.innerWidth : $(window).width();
		toggle_go_top(window_width);
	});

	// 준비중 얼럿
	$(document).on('click', 'a.in_preparation', function(e){
		e.preventDefault();
		alert('준비중입니다.');
	});


	// 비디오 우클릭 방지
	$('video').on('contextmenu', function(e){
		e.preventDefault();
	});



	//*** function
	// GO_TOP 버튼 보이기/숨기기 토글
	function toggle_go_top(window_width) {
//		console.log("toggle_go_top("+window_width+")");

		if(window_width <= mobile_width) {
			if($(window).scrollTop() > 0) {
				$('.top_btn').stop().fadeIn(animate_speed);
			} else {
				$('.top_btn').stop().fadeOut(animate_speed);
			}
		} else {
			$('.top_btn').hide();
		}
	}

	
	//*** init
	toggle_go_top(window_width);
});


