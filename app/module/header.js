define(["jquery","jqcookie"],function($,jqcookie){
	


	//console.log($);
	function Header(){}
		Header.prototype.init = function(){
			var str = $.cookie("username");
		
			if(str){
				console.log($(".header .top .item p #login"));
				$(".header .top .item p #login").html("欢迎您："+str);
				// $(".header .top .item p #register").html("注销账户");
				$(".header .top .item p #register").css("display","none");
				$(".header .top .item p a").attr("href","javascript:;");
				$(".header .top .item p .cart").attr("href","/html/cart.html");
				$(".header .top .item p .cart").css({"display":"block"});
				// $(".header .top .item p #register").click(function(){
				// 	$.cookie("username",{
		 	// 				expires:-1
		 	// 			})
				// })
			   }//else{
			// 	$(".header .top .item p #login").html("登录");
			// }
			
			$(".phone").hover(function(){
				$(".header").css({"background":"url('/images/1/5.png')no-repeat 0.8% center white"});
				$(".header .top .ul a").css({"color":"black"});
				$(".header .top .ul li ul").css({"display":"block"});

			},function(){
			});
			$(".sound").hover(function(){
				$(".header").css({"background":"url('/images/1/5.png')no-repeat 0.8% center white"});
				$(".header .top .ul a").css({"color":"black"});
				$(".header .top .ul li ul").css({"display":"block"});

			},function(){
			});
			$(".capacity").hover(function(){
				$(".header").css({"background":"url('/images/1/5.png')no-repeat 0.8% center white"});
				$(".header .top .ul a").css({"color":"black"});
				$(".header .top .ul li ul").css({"display":"block"});

			},function(){
			});
			$(".live").hover(function(){
				$(".header").css({"background":"url('/images/1/5.png')no-repeat 0.8% center white"});
				$(".header .top .ul a").css({"color":"black"});
				$(".header .top .ul li ul").css({"display":"block"});

			},function(){
			});
			
		
			$(".header").hover(function(){
				console.log($(".ul"));
				$(".header .top .ul a").css({"color":"black"});
				$(".header .top .item p a").css({"color":"#0bbbef"});
				$(".header").css({"background":"url('/images/1/5.png')no-repeat 0.8% center white"});
			},function(){
				$(".header .top .ul li ul").css({"display":"none"});
				$(".header .top .ul li a").css({"color":"white"})
				$(".header .top .item p a").css({"color":"white"});
				$(".header").css({"background":"url('/images/1/5.jpg')no-repeat 0.8% center black"});
			});
			
		}
		// Header.prototype.nav = function(){
		// 	$(".header").hover(function(){

		// 	}),function(){
		// 		$(".nav").css({"display":"none"});
		// 		$(".header").css({"background":"black"});
		// 		$("*").css({"color":"white"});
		// 	}
		// }

return new Header();
})