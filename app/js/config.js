require.config({
	baseUrl: "/",
	paths: {
		"header": "module/header",
		"footer": "module/footer",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"lunbo":"module/lunbo",
		"template": "libs/template-web",
		"migrate": "libs/jquery-migrate-1.2.1.min",
		"jqcookie":"libs/jquery.cookie"
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})