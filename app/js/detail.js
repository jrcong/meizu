require(["config"], function(){
	require(["jquery","template","tools", "header","jqcookie", "footer"], function($,template,tools,header,footer,jqcookie){
		//console.log(header);
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
					//document.getElementsByTagName("header")[0].innerHTML = data;
				resolve();

			})
			$("footer").load("/html/component/footer.html", function(){
				
			})
		 }).then(function(){
		 	header.init();
		 }).then(function(){
		 // 	$(".tab li").click(function(){
			// 	$(this).addClass("ac").siblings().removeClass("ac");

			// 	$(".tab img").eq($(this).index()).show().siblings().hide();
			// 	$(".tab .small").siblings().removeClass("small");
			// 	// $(".tab .small").siblings().css("display":"none");
			// 	$(".big img").eq($(this).index()).addClass("small").siblings().removeClass("small");
			
			// })
		 }).then(function(){
			// 	 	$(".tab .top").hover(function(){
			// 	 	$(".tab .top .fdj").css({"display":"block"});
			// 		$(".tab .top .big").css({"display":"block"});			
			// 	 },function(){
			// 	 	$(".tab .top .fdj").css({"display":"none"});
			// 	 	$(".tab .top .big").css({"display":"none"});
			// 	 	// $(".tab .top img").css({"display":"none"});
				 	
			// })
		}).then(function(){
			// $(".tab .top").mousemove(function(e){
			// 	e = e || event;
			// 	var _left = e.pageX - $(".tab").offset().left - $(".fdj").width()/2,
			// 	 	_top = e.pageY - $(".tab").offset().top - $(".fdj").height()/2;
			// 	 	console.log(_left,$(".top").width());
			// 	 	if(_left<0){
			// 	 		_left = 0;
			// 	 	}else if(_left >= $(".tab .top").width() - $(".fdj").width()){
			// 	 		_left = $(".tab .top").width() - $(".fdj").width();
			// 	 	}
			// 	 	if(_top<0){
			// 	 		_top = 0;
			// 	 	}else if(_top >= $(".tab .top").height() - $(".fdj").width()){
			// 	 		_top = $(".tab .top").height() - $(".fdj").width();
			// 	 	}
			// 	$(".fdj").css({"top":_top,"left":_left});
			// 	var Left = -2*_left,
			// 		Top = -2*_top;
			// 	$(".small").css({"top":Top,"left":Left})
			// })
		}).then(function(){
			$(".right .num .prev").click(function(){
				var num = $(".right .num input").val();
				// $(".right .num input").html() =num-1;
				console.log(num-1);
			})
		}).then(function(){
			var str = location.search.slice(1);
			var arr = str.split("="); // ["id","3"];
			var obj = {};
			obj[arr[0]] = arr[1];
			console.log(obj);
			$.ajax({
				method:"get",
				data:obj,
				url:"http://localhost/meizu/api/detail.php",
				dataType:"json",
				success:function(res){
					console.log(res);
					var html = template("pro-template",{product: res.meizu});
					 //console.log(res);
					 console.log(html);
					$(".tab").html(html);
					$(".tab li").click(function(){
					$(this).addClass("ac").siblings().removeClass("ac");

					$(".tab img").eq($(this).index()).show().siblings().hide();
					$(".tab .small").siblings().removeClass("small");
					// $(".tab .small").siblings().css("display":"none");
					$(".big img").eq($(this).index()).addClass("small").siblings().removeClass("small");
				
				})
					$(".tab .top").hover(function(){
					 	$(".tab .top .fdj").css({"display":"block"});
						$(".tab .top .big").css({"display":"block"});			
					 },function(){
					 	$(".tab .top .fdj").css({"display":"none"});
					 	$(".tab .top .big").css({"display":"none"});
					 	// $(".tab .top img").css({"display":"none"});
						 	
					})
					$(".tab .top").mousemove(function(e){
						e = e || event;
						var _left = e.pageX - $(".tab").offset().left - $(".fdj").width()/2,
						 	_top = e.pageY - $(".tab").offset().top - $(".fdj").height()/2;
						 	console.log(_left,$(".top").width());
						 	if(_left<0){
						 		_left = 0;
						 	}else if(_left >= $(".tab .top").width() - $(".fdj").width()){
						 		_left = $(".tab .top").width() - $(".fdj").width();
						 	}
						 	if(_top<0){
						 		_top = 0;
						 	}else if(_top >= $(".tab .top").height() - $(".fdj").width()){
						 		_top = $(".tab .top").height() - $(".fdj").width();
						 	}
						$(".fdj").css({"top":_top,"left":_left});
						var Left = -2*_left,
							Top = -2*_top;
						$(".small").css({"top":Top,"left":Left})
					})
					var num = 0;
					var obj = {};
					var cart = $.cookie("cart");
					var arr = [];
					if(cart){
						arr = JSON.parse(cart);
					}
					$(".right .style .btn").click(function(){
							for(var i = 0 ; i < arr.length ; i++){
								if(arr[i].id === res.meizu.id){
									arr[i].num++;
									break;
								}
							}
							if(i === arr.length){
								 obj={
								 	id:res.meizu.id,
								 	price:res.meizu.price,
								 	num:1,
								 	name:res.meizu.name
								};
								console.log(obj);
								arr.push(obj);
							}
							var str = JSON.stringify(arr);
							// var str = JSON.stringify(objArr);
							$.cookie("cart",str,{
							path:"/",
							expires:7
						})

				
			})
				}
			})

		}).then(function(){

		})
	})
			
})