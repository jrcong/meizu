require(["config"], function(){
	require(["jquery", "tools", "header", "footer","lunbo"], function($,tools,header,footer,lunbo){
		//console.log(header);
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
					//document.getElementsByTagName("header")[0].innerHTML = data;
				resolve();
					//console.log($("header"));
			});
			$("footer").load("/html/component/footer.html", function(){
				
			});
			$("#div1").load("/html/component/lunbo.html", function(){
				// console.log($("#div1 #lunboList"));
				$(".content #div1").lunbo({
		 		goPrev:"left",
		 		goNext:"right"
		 	});

			});
		 }).then(function(){
		 	header.init();
		 }).then(function(){

		 })
		
	})
})
