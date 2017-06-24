/*--------------------------------------------------------------------------------------------------------------------------------
//	DATE : 2016-07-14
//	AUTH : 김선엽 (ariesmilk@jjworx.com)
//  PATH : /share/js/menu_script.js
//	DESC : 메뉴 스크립트
//	COPYRIGHT : JJ WORX
//--------------------------------------------------------------------------------------------------------------------------------*/


//*** 탑메뉴 init
function initTopMenu(m1, m2) {
//	console.log("initTopMenu("+m1+","+m2+")");
	$('#topmenu >ul >li#top1m'+m1).addClass('on');								// 1차 on
	$('#topmenu >ul >li#top1m'+m1+' >ul >li#top1m'+m1+'m'+m2).addClass('on');	// 2차 on


	$(document).on('hover', '#topmenu >ul >li', function(e){					// 1차 hover
		$('#topmenu >ul >li#top1m'+m1).toggleClass('on');
		$(this).toggleClass('on');
	});


	$(document).on('click', '#topmenu >ul >li.toggle_menu >a', function(e){		// vehicle 서브메뉴 토글
		e.preventDefault();

		if(!$(this).parents('#topmenu').find('.toggle_on').is($(this).next('ul'))) {		// 다른 서브메뉴가 열려있을때 리셋
			$(this).parents('#topmenu').find('.toggle_on').removeClass('toggle_on');
		}

		$(this).parents('li').find('>ul').toggleClass('toggle_on');
	});
}


//*** 모바일메뉴 init
function initMobileMenu(m1, m2, m3) {
//	console.log("initMobileMenu("+m1+","+m2+","+m3+")");
//	$('#mobile_menu > ul >li >a').addClass('on');	// 서브메뉴 항상열기. 필요시 주석해제할것
	$('#mobile_menu > ul >li:nth-child('+m1+') >a').addClass('on');	// 1차 on. 현재페이지 상위메뉴만 열기
	$('#mobile_menu > ul >li:nth-child('+m1+') >a').next('ul').find('>li:nth-child('+m2+')').addClass('on');	// 2차 on
	$('#mobile_menu > ul >li:nth-child('+m1+') >a').next('ul').find('>li:nth-child('+m2+') >a').next('ul').find('>li:nth-child('+m3+')').addClass('on');	// 3차 on
}


//*** 사이드메뉴 init
function initSideMenu(m1, m2, m3) {
//	console.log("initSideMenu("+m1+","+m2+","+m3+")");
	// 1depth on
	if($('#sidemenu_m'+m1))
		$('#sidemenu_m'+m1).addClass('on');

	// 2depth on
	if($('#sidemenu_m'+m1+'m'+m2)) {
		$('#sidemenu_m'+m1+'m'+m2).addClass('on');
		$('#sidemenu_m'+m1+'m'+m2).next('ul').addClass('on');		// 서브메뉴 열기
	}

	// 3depth on
	if($('#sidemenu_m'+m1+'m'+m2+'m'+m3)) {
		$('#sidemenu_m'+m1+'m'+m2+'m'+m3).addClass('on');
		$('#sidemenu_m'+m1+'m'+m2+'m'+m3).next('ul').addClass('on');
	}
}
