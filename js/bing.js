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
var arr2 = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
var date = arr[myDate.getDay()];
var time = year+"-"+mouth+"-"+day+" "+date;
//音乐
var ka = 1;
var timer = null;

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
		$(".zq_music").animate({opacity:1},300);
	}
	$(".zq_banner").fadeOut(500,function(){
		$(this).css("backgroundImage","url(img/banner"+br+".jpg)");
		$(this).fadeIn(300);
	})
	$(".zq_content_title").text(arrTit[br]);
	$(".zq_content_date").text(arrDate[br]);
	$(".zq_content_text").text(arrText[br]);
})

function aaa(){
	var a1 = Math.random()*21;
	var a2 = Math.random()*21;
	var a3 = Math.random()*21;
	var a4 = Math.random()*21;
	var a5 = Math.random()*21;
	$(".sound_item1").css({height:a1});
	$(".sound_item2").css({height:a2});
	$(".sound_item3").css({height:a3});
	$(".sound_item4").css({height:a4});
	$(".sound_item5").css({height:a5});
}
$(".zq_music").click(function(){
	if(ka == 1){
		$("#kanong")[0].play();
		$(".zq_music").find("a").text("暂停");
		timer = setInterval(aaa,200);
		ka = 2;
	}else{
		$("#kanong")[0].pause();
		$(".zq_music").find("a").text("播放");
		clearInterval(timer);
		$(".item").css({height:2});
		ka = 1;
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

//天气
function formatterDateTime() {
  var date=new Date()
  var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        return datetime;
}

//ip
$.ajax({
		type:"post",
		url:"http://route.showapi.com/9-4",
		async:true,
		dataType:'json',
		data:{
			"showapi_timestamp": formatterDateTime(),
	        "showapi_appid": '57879',
	        "showapi_sign": '599caef39edf440d8031dc8427ea9664',
	        "ip":"",
	        "needMoreDay":"0",
	        "needIndex":"0",
	        "needHourData":"0",
	        "need3HourForcast":"0",
	        "needAlarm":"0"
		},
		error: function(XmlHttpRequest, textStatus, errorThrown) {
        	console.log("获取失败!");
    	},
    	success: function(data) {
        	$(".ip").text(data.showapi_res_body.cityInfo.c7);
    	}
});

$(".place").hover(function(){
	$.ajax({
		type:"post",
		url:"http://route.showapi.com/9-4",
		async:true,
		dataType:'json',
		data:{
			"showapi_timestamp": formatterDateTime(),
	        "showapi_appid": '57879',
	        "showapi_sign": '599caef39edf440d8031dc8427ea9664',
	        "ip":"",
	        "needMoreDay":"1",
	        "needIndex":"0",
	        "needHourData":"0",
	        "need3HourForcast":"0",
	        "needAlarm":"0"
		},
		error: function(XmlHttpRequest, textStatus, errorThrown) {
        	console.log("获取失败!");
    	},
    	success: function(data) {
    		$(".weather").stop().fadeIn(300);
//  		console.log(data);
        	$(".weather_ip").text(data.showapi_res_body.cityInfo.c7);
        	$(".weather_weather").text(data.showapi_res_body.now.weather);
        	$(".weather_temp").text(data.showapi_res_body.now.temperature+"°");
        	$(".weather_week").text(arr2[data.showapi_res_body.f1.weekday-1]+"，");
        	$(".weather_wind").text(data.showapi_res_body.now.wind_direction);
        	$(".weather_wind2").text(data.showapi_res_body.now.wind_power);
        	$(".today_lowTemp").text(data.showapi_res_body.f1.night_air_temperature+"°,");
        	$(".today_topTemp").text(data.showapi_res_body.f1.day_air_temperature+"°");
        	$(".today_nightPic").find("img").attr("src",data.showapi_res_body.f1.night_weather_pic);
        	$(".today_nightTemp").text(data.showapi_res_body.f1.night_air_temperature+"°");
        	$(".sunrise_sunset").text("日落:"+(data.showapi_res_body.f1.sun_begin_end).substr(6));
        	$(".f2_week").text(arr2[data.showapi_res_body.f2.weekday-1]);
        	$(".f2_pic").find("img").attr("src",data.showapi_res_body.f2.day_weather_pic);
        	$(".f2_topTemp").text(data.showapi_res_body.f2.day_air_temperature+"°,");
        	$(".f2_lowTemp").text(data.showapi_res_body.f2.night_air_temperature+"°");
        	$(".f3_week").text(arr2[data.showapi_res_body.f3.weekday-1]);
        	$(".f3_pic").find("img").attr("src",data.showapi_res_body.f3.day_weather_pic);
        	$(".f3_topTemp").text(data.showapi_res_body.f3.day_air_temperature+"°,");
        	$(".f3_lowTemp").text(data.showapi_res_body.f3.night_air_temperature+"°");
        	$(".f4_week").text(arr2[data.showapi_res_body.f4.weekday-1]);
        	$(".f4_pic").find("img").attr("src",data.showapi_res_body.f4.day_weather_pic);
        	$(".f4_topTemp").text(data.showapi_res_body.f4.day_air_temperature+"°,");
        	$(".f4_lowTemp").text(data.showapi_res_body.f4.night_air_temperature+"°");
    	}
	});
},function(){
	$(".weather").stop().fadeOut(300);
})

})
