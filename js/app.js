angular.module('app', ['app.controllers', 'ui.router', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'angularFileUpload', 'satellizer'])

.run(function($rootScope){

	$rootScope.userActual = {};
	$rootScope.userActual.login = false;
	$rootScope.userActual.nombre = "No Logueado";
	$rootScope.userActual.foto = "sin foto";

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

	//$urlRouterProvider.otherwise("/inicio");

})


