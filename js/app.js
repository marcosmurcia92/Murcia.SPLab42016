angular.module('app', ['app.controllers', 'ui.router', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'angularFileUpload', 'satellizer'])

.run(function($rootScope,$auth,UsuarioActual){

	$rootScope.userActual = {};

	if($auth.isAuthenticated()){
		console.info("payload",$auth.getPayload());
		console.info("token",$auth.getToken());
		$rootScope.userActual.login = true;
		$rootScope.userActual.nombre = $auth.getPayload().nombre;
		$rootScope.userActual.foto = $auth.getPayload().foto;
		$rootScope.userActual.tipo = $auth.getPayload().tipo;
		UsuarioActual.login($auth.getPayload().nombre, $auth.getPayload().correo,  $auth.getPayload().tipo,$auth.getPayload().foto);	
	}else{
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";
		$rootScope.userActual.foto = "sin foto";
		$rootScope.userActual.tipo = "";
	}

})


.config(function ($stateProvider, $urlRouterProvider, $authProvider){

	$authProvider.loginUrl ="Murcia.SPLab42016/ws1/servidor/jwt/php/auth.php";
	$authProvider.tokenName = "segundoparcial";
	$authProvider.tokenPrefix="Aplicacion";
	$authProvider.authHeader="data";

	$stateProvider
		.state("log", {
			url:"/log",
			abstract:true,
			templateUrl:"log-abstract.html"
		})

		.state("log.login", {
			url:"/login",
			views: {
				"registro": {
					templateUrl:"login.html",
					controller:"LoginCtrl"
				}
			}
		})

		.state("inicio", {
			url:"/inicio",
			templateUrl: "inicio.html",
			controller:"InicioCtrl"
		})

		.state("altaProductos", {
			url:"/altaProductos",
			templateUrl: "altaProductos.html",
			controller:"altaProductosCtrl"
		})

		.state("grillaProductos", {
			url:"/grillaProductos",
			templateUrl: "grillaProductos.html",
			controller:"grillaProductosCtrl"
		})

		.state("altaUsuarios", {
			url:"/altaUsuarios",
			templateUrl: "altaUsuarios.html",
			controller:"altaUsuariosCtrl"
		})

		.state("modificarUsuarios", {
			url:"/modificarUsuarios/{id}?:nombre:correo:clave:tipo",
			templateUrl: "altaUsuarios.html",
			controller:"modificarUsuariosCtrl"
		})

		.state("grillaUsuarios", {
			url:"/grillaUsuarios",
			templateUrl: "grillaUsuarios.html",
			controller:"grillaUsuariosCtrl"
		})

		.state("directivaUsuarios", {
			url:"/directivaUsuarios",
			templateUrl: "directivaUsuarios.html",
			controller:"directivasCtrl"
		})

		.state("directivaProductos", {
			url:"/directivaProductos",
			templateUrl: "directivaProductos.html",
			controller:"directivasCtrl"
		})

	$urlRouterProvider.otherwise("/inicio");

})


