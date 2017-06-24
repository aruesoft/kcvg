/*--------------------------------------------------------------------------------------------------------------------------------
//	DATE : 2016-07-14
//	AUTH : 김선엽 (ariesmilk@jjworx.com)
//  PATH : /share/js/mobile_menu.js
//	DESC : 모바일메뉴 스크립트
//	COPYRIGHT : JJ WORX
//--------------------------------------------------------------------------------------------------------------------------------*/
/* jquery.easing.1.3.js 로드 필요 */


$(document).ready(function(){
	//*** variables
	var window_width	 = $(window).width();	// 브라우저 너비
	var mobile_width	 = 799;		// 모바일로 판별할 너비
	var mobilemenu_width = 0;		// 모바일메뉴 너비
	var animate_speed	 = 200;		// 에니메이션 속도(ms)


	//*** binding
	// 모바일메뉴 버튼 클릭
	$(document).on('click', '#left_btn', function(e){
		$('.bg_fix').show();

		if($(this).parents('#container').hasClass('con_fixed')) {
			close_mobilemenu();
		} else {
			e.preventDefault();
			$('#left_menu').stop().animate({ left: 0 }, animate_speed, 'easeOutExpo');
			$('#container').addClass('con_fixed')
				.stop().animate({ left: mobilemenu_width }, animate_speed, 'easeOutExpo');
		}
	});

	// 백그라운드레이어 클릭
	$('.bg_fix').on('click', function(e){		// $(document).on(event, selector, function) 형식 사용시 iphone에서 안됨
		close_mobilemenu();
	});

	// 모바일메뉴가 열린상태에서 PC사이즈로 리사이즈시 자동닫기
	$(window).on('resize', function(e){
		window_width	 = $(window).width();

		if(window_width > mobile_width) {
			close_mobilemenu();
		}
	});

	//*** function
	// 모바일메뉴 닫기
	function close_mobilemenu() {
		$('#left_menu').stop().animate({ left: -750 }, animate_speed, 'easeOutExpo' );
		$('.con_fixed').stop().animate({ left: 0, right: 0 }, animate_speed, 'easeOutExpo', function(){
			$('#container').removeClass('con_fixed');
			$('.bg_fix').hide();
		 });
		
		return false;
	}
});


