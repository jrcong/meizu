require(["config"], function(){
	require(["jquery","tools", "header", "footer"], function($,tools,header,footer){
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
		 	$("#btn").click(function(){
		 		// console.log($(".register form input:nth-child(1)"));
		 		var username = $(".register form input:nth-child(1)").val();
		 		var password = $(".register form input:nth-child(2)").val();
		 		if(username.length === 0){
		 			alert("用户名不能为空！");
		 			return;
		 		}
		 		if(password.length < 6){
		 			alert("请输入一个6位以上密码");
		 			return;
		 		}
		 		var data={
		 			"username":username,
		 			"password":password
		 		}
		 		
		 		$.ajax({
			 		method:"post",
			 		data:data,
			 		url:"http://localhost/meizu/api/register.php",
			 		dataType:"json",
			 		success:function(res){
			 			if(res.code === 1){
			 				if(confirm("注册成功，是否跳转到登录页面？")){
			 					window.open("http://localhost:1221/html/login.html")
			 				}
			 			}else{
			 					alert("注册失败，请重试！")
			 				}
			 		}
		 		})
		 	})
		 
		 	e.preventDefault();
		 	return false;
		  })
	})
})