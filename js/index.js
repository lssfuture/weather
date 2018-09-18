/*
* @Author: 我的文档
* @Date:   2018-09-14 14:55:09
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-15 09:47:35
*/
 window.onload=function(){
 	let weather;
 	// 请求数据
 	$.ajax({
 		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
 		dataType:"jsonp",
 		success:function(res){
 			weather=res.data.weather
 			console.log(weather);
 			render(weather);

 		}
 	})

 	// 渲染数据
 	function render(obj){
 		$("nav .yi h1").html(obj.city_name);
 		$("nav .box h5").html(obj.quality_level);
 		$("nav h2").html(obj.current_temperature+"°");
 		$(".cloud").html(obj.current_condition);
		$(".sun").html(obj.tomorrow_condition);
		$(".top").html(obj.dat_high_temperature);
		$(".low").html(obj.dat_low_temperature);
		$(".top1").html(obj.tomorrow_high_temperature);
		$(".low1").html(obj.tomorrow_low_temperature);
		$(".now").css("background-image",`url("img/${obj.dat_weather_icon_id}.png")`);
		$(".next").css("background-image",`url("img/${obj.tomorrow_weather_icon_id}.png")`);

 		// 小时  dom  数组
 		obj.hourly_forecast.forEach(function(item,index){
 			let str="";
 			str=`<li>
				<div class="time">${item.hour}:00</div>
				<div class="tu" style="background:url(img/${item.weather_icon_id}.png) no-repeat"></div>
				<div class="wendu">${item.temperature}°</div>
			</li>`
			
 			$(".part2 ul").append(str);
		})
		let arr1=obj.forecast_list.slice(0,6);
		console.log(arr1);
		arr1.forEach(function(value){
			let str="";
			str=`<li>
			
				<div class="day">${value.date.substring(5,7)}/${value.date.substring(8,10)}</div>
				<div class="zhuangkuang1">${value.condition}</div>
				<div class="tu1" style="background:url(img/${value.weather_icon_id}.png) no-repeat"></div>
				<div class="wendu1">${value.high_temperature}°</div>
				<div class="wendu2">-5°</div>
				<div class="tu2" style="background:url(img/${value.weather_icon_id}.png) no-repeat"></div>
				<div class="zhuangkuang2">多云</div>
				<div class="feng">${value.wind_direction}</div>
				<div class="ji">${value.wind_level}</div>
			</li>`
			$(".part3 ul").append(str);
		})

 	}
}
