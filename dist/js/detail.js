require(["config"],function(){require(["jquery","template","tools","header","jqcookie","footer"],function(a,s,t,o,e,i){new Promise(function(t,o){a("header").load("/html/component/header.html",function(){t()}),a("footer").load("/html/component/footer.html",function(){})}).then(function(){o.init()}).then(function(){}).then(function(){}).then(function(){}).then(function(){a(".right .num .prev").click(function(){var t=a(".right .num input").val();console.log(t-1)})}).then(function(){var t=location.search.slice(1).split("="),o={};o[t[0]]=t[1],console.log(o),a.ajax({method:"get",data:o,url:"http://localhost/meizu/api/detail.php",dataType:"json",success:function(e){console.log(e);var t=s("pro-template",{product:e.meizu});console.log(t),a(".tab").html(t),a(".tab li").click(function(){a(this).addClass("ac").siblings().removeClass("ac"),a(".tab img").eq(a(this).index()).show().siblings().hide(),a(".tab .small").siblings().removeClass("small"),a(".big img").eq(a(this).index()).addClass("small").siblings().removeClass("small")}),a(".tab .top").hover(function(){a(".tab .top .fdj").css({display:"block"}),a(".tab .top .big").css({display:"block"})},function(){a(".tab .top .fdj").css({display:"none"}),a(".tab .top .big").css({display:"none"})}),a(".tab .top").mousemove(function(t){var o=(t=t||event).pageX-a(".tab").offset().left-a(".fdj").width()/2,e=t.pageY-a(".tab").offset().top-a(".fdj").height()/2;console.log(o,a(".top").width()),o<0?o=0:o>=a(".tab .top").width()-a(".fdj").width()&&(o=a(".tab .top").width()-a(".fdj").width()),e<0?e=0:e>=a(".tab .top").height()-a(".fdj").width()&&(e=a(".tab .top").height()-a(".fdj").width()),a(".fdj").css({top:e,left:o});var i=-2*o,n=-2*e;a(".small").css({top:n,left:i})});var i={},o=a.cookie("cart"),n=[];o&&(n=JSON.parse(o)),a(".right .style .btn").click(function(){for(var t=0;t<n.length;t++)if(n[t].id===e.meizu.id){n[t].num++;break}t===n.length&&(i={id:e.meizu.id,price:e.meizu.price,num:1,name:e.meizu.name},console.log(i),n.push(i));var o=JSON.stringify(n);a.cookie("cart",o,{path:"/",expires:7})})}})}).then(function(){})})});