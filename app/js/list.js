require(["config"], function(){
	require(["jquery", "template","tools", "header", "footer"], function($,template,tools,header,footer){
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

		  }).then(function(){
			$.ajax({
				method: "get",
				url:"http://localhost/meizu/api/list.php",
				dataType:"json",
				success: function(res){
					
					var html = template("pro-template",{products: res.meizu});
					// console.log(res);
					// console.log(html);
					$("#proList").html(html);
				}

			})
		})
		
	})
})