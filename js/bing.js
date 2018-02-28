$(function(){
	
var br = 0;
$('.zq_left').click(function(){
	$(".zq_right").animate({opacity:1},300);
	$(".zq_right").css("cursor","pointer");
	br += 1;
	if(br >= 2){
		br = 2;
		$(".zq_left").css("cursor","default");
		$(".zq_left").animate({opacity:0.3},300);
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
	}else{
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
	}
});
$('.zq_right').click(function(){
	$(".zq_left").animate({opacity:1},300);
	$(".zq_left").css("cursor","pointer");
	br -= 1;
	if(br <= 0){
		br = 0;
		$(".zq_right").css("cursor","default");
		$(".zq_right").animate({opacity:0.3},300);
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
	}else{
		$(".zq_banner").fadeOut(500,function(){
			$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
			$(this).fadeIn(300);
		})
	}
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
