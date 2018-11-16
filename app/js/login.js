require(["config"], function(){
	require(["jquery","tools", "header","jqcookie", "footer"], function($,tools,header,jqcookie,footer){
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
		 }).then(function(e){
		 	e = e || event;
		 	$(".login #btn").click(function(){
		 		// console.log($(".login form input:nth-child(1)"));
		 		var username = $(".login form input:nth-child(1)").val();
		 		var password = $(".login form input:nth-child(2)").val();
		 		if(username.length === 0){
		 			alert("用户名不能为空！");
		 			return;
		 		}
		 		if(password.length === 0){
		 			alert("密码不能为空！");
		 			return;
		 		}
		 		var data={
		 			"username":username,
		 			"password":password
		 		}
		 		document.cookie = "username="+$(".login form input:nth-child(1)").val();
		 		$.ajax({
			 		method:"get",
			 		data:data,
			 		url:"http://localhost/meizu/api/login.php",
			 		dataType:"json",
			 		success:function(res){
			 			// console.log(res);
			 			
			 			if(res.code === 1){
			 				$.cookie("username",$(".login form input:nth-child(1)").val(),{
			 					path:"/"
			 				})
			 				// document.cookie = "username="+$(".login form input:nth-child(1)").val();
			 				// if(res.meizu[0].username == username && res.meizu[0].password == password){
			 				alert("即将跳转");
			 				window.open("http://localhost:1221/index.html")
			 				$(".header .top .item #login").html("欢迎您！")
			 			}else{
			 				alert("密码错误");
			 			}
			 		}
		 		})
		 	})
		 	e.preventDefault();
		 	return false;
		  })
	})
})