$(function(){
	
var br = 0;
var arrTit = ["夕阳无限好，只是近黄昏","去年不可留 今年犹可追 祝大家新年快乐！","林深时见鹿 ，林空鹿饮溪"];
var arrDate = ["2018-3-1","2018-2-28","2018-2-27"];
var arrText = ["若我是在逆光拍夕阳，那么，此刻我应该就在晨光的方向吧。","The object of a new year is not that we should have a new year. It is that we should have a new soul. 新年的目的并非是拥有新的一年，而是拥有一个新的灵魂。","蘑菇蘑菇不会开花，小鹿小鹿你还爱他吗？ 蘑菇不会开花会长大，小鹿去找森林吧"];
var myDate = new Date();
var year = myDate.getFullYear();
var mouth = myDate.getMonth()+1;
var day = myDate.getDate();
var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var date = arr[myDate.getDay()];
var time = year+"-"+mouth+"-"+day+" "+date;
$('.zq_left').click(function(){
	$(".zq_right").animate({opacity:1},200);
	$(".zq_right").css("cursor","pointer");
	br += 1;
	if(br == 1){
		$(".zq_music").animate({opacity:1},0);
	}else{
		$(".zq_music").animate({opacity:0},0);
	}
	if(br >= 2){
		if(br > 2){
			br = 2;
			return false;
		}
		$(".zq_left").css("cursor","default");
		$(".zq_left").animate({opacity:0.3},200);
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
		$(".zq_content_title").text(arrTit[br]);
		$(".zq_content_date").text(arrDate[br]);
		$(".zq_content_text").text(arrText[br]);
	}else{
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
		$(".zq_content_title").text(arrTit[br]);
		$(".zq_content_date").text(arrDate[br]);
		$(".zq_content_text").text(arrText[br]);
	}
});
$('.zq_right').click(function(){
	$(".zq_left").animate({opacity:1},200);
	$(".zq_left").css("cursor","pointer");
	br -= 1;
	if(br == 1){
		$(".zq_music").animate({opacity:1},0);
	}else{
		$(".zq_music").animate({opacity:0},0);
	}
	if(br <= 0){
		if(br < 0){
			br = 0;
			return false;
		}
		$(".zq_right").css("cursor","default");
		$(".zq_right").animate({opacity:0.3},200);
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
		$(".zq_content_title").text(arrTit[br]);
		$(".zq_content_date").text(arrDate[br]);
		$(".zq_content_text").text(arrText[br]);
	}else{
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
		$(".zq_content_title").text(arrTit[br]);
		$(".zq_content_date").text(arrDate[br]);
		$(".zq_content_text").text(arrText[br]);
	}
});
$(".zq_bing").click(function(){
	$(".index").fadeOut(0);
	$(".bing").fadeIn(0);
	$(".zq_music").animate({opacity:0},300);
	$.ajax({
		url:'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson',
		type:'post',
		dataType:'json',
		data:"",
		success:function(data){
//			console.log(data);
			var bingBg = data.url;
			var bingTit = data.title;
			var bingDisc = data.disc;
			$(".zq_banner").fadeOut(500,function(){
				$(this).css("backgroundImage","url(http://bing.com"+bingBg+")");
				$(this).fadeIn(300);
			})
			$(".zq_content_title").text(bingTit);
			$(".zq_content_date").text(time);
			$(".zq_content_text").text(bingDisc);
			
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
           // 状态码
           console.log(XMLHttpRequest.status);
           // 状态
           console.log(XMLHttpRequest.readyState);
           // 错误信息   
           console.log(textStatus);
        }
	})
})
$(".bing").click(function(){
	$(".bing").fadeOut(0);
	$(".index").fadeIn(0);
	if(br == 1){
		$(".zq_music").animate({opacity:1},0);
	}
	$(".zq_banner").fadeOut(500,function(){
		$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
		$(this).fadeIn(300);
	})
	$(".zq_content_title").text(arrTit[br]);
	$(".zq_content_date").text(arrDate[br]);
	$(".zq_content_text").text(arrText[br]);
})

$(".zq_music").click(function(){
	
});

//全屏
$(".full-screen").click(function(){
	toggleFullScreen();
});
function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method  
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {// current working methods  
        if (document.documentElement.requestFullscreen) {  
            document.documentElement.requestFullscreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullscreen) {  
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    } else {  
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
    }  
}  
})
