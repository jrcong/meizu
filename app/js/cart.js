require(["config"], function(){
	require(["jquery","tools","template","header","footer","jqcookie"], function($,tools,template,header,footer,jqcookie){
		//console.log(header);
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
					//document.getElementsByTagName("header")[0].innerHTML = data;
				resolve();
					//console.log($("header"));
			})
			$("footer").load("/html/component/footer.html", function(){
				// console.log($("footer"))
			})
		 }).then(function(){
		 	header.init();
		 }).then(function(){
		 		
		 		var str = $.cookie("cart");
		 		var json = JSON.parse(str);
			 	console.log(json[0].num);
			 	var html = template("pro-template",{products:json});
			 	$(".li").html(html);

			 	var price = $(".cart-list .cart-price").html().slice(1,-1);
			 	var num = $(".cart-list .num input").val();
			 	$(".cart-list .prev").click(function(){
			 		
			 		num--;
			 		if(num<=1){
			 			num=1;
			 		}
			 		var total = price*num;
			 		$(".cart-list .num input").val(num);
			 		console.log($(".cart-list .num input").val());
			 		$(".cart-list .cart-total").html(total);
			 	});
			 	$(".cart-list .next").click(function(){

			 		num++;
			 		var total = price*num;
			 		$(".cart-list .num input").val(num);
			 		console.log($(".cart-list .num").val());
			 		$(".cart-list .cart-total").html(total);
			 	});

			 	var total = price*num
			 	console.log(total);
			 	$(".cart-list .cart-total").html(total);
			 	console.log(price);
		 	// console.log(str);
		 	
		  })
	})
})
// require(["config"],function(){
// 	require(["jquery","header","footer","template","jqcookie"],function($,header,footer,template,jqcookie){
// 		new Promise(function(resolve,reject){
// 			//实现header的样式不同，在url后面加上选择器
// 			$("header").load("ml/component/header.html",function(){
// 				resolve();
// 				header.state();
// 			});
// 			$("footer").load("ml/component/footer.html",function(){
	
// 			});
// 		}).then(function(){
// 			//取cookie状态
// 				var str = $.cookie("cart");
// 			//将字符串转换为json
// 				var json = JSON.parse(str);
// 				console.log(json);
// 				console.log(json[0]);
// 				var html = template("temp",{products:json[0]});
// 				//console.log(html);
// 				$(".cart-body").html(html);
// 				//购物车删除功能
// 				//购物车结算功能
// 		})
// 	})
// })
