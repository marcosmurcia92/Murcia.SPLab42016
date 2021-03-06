angular.module('app.controllers', [])

.controller("LoginCtrl", function($scope, $auth, UsuarioActual, $state, $rootScope){

	$scope.usuario = {};

	$scope.usuario.nombre = "comprador";
	$scope.usuario.correo = "comp@comp.com";
	$scope.usuario.clave = "123";

	if ($auth.isAuthenticated()){
		console.info("getToken", $auth.getToken());
		console.info("token", $auth.getPayload());
	} else{
	    console.info("token", $auth.getPayload());
	    console.info("Factory Usuario Actual", UsuarioActual.getFullData());
	}

	$scope.IngresoComprador = function(){
		$scope.usuario.nombre = "comprador";
		$scope.usuario.correo = "comp@comp.com";
		$scope.usuario.clave = "123";
	}


	$scope.IngresoVendedor = function(){
		$scope.usuario.nombre = "vend";
		$scope.usuario.correo = "vend@vend.com";
		$scope.usuario.clave = "321";
	}

	$scope.IngresoAdmin = function(){
		$scope.usuario.nombre = "admin";
		$scope.usuario.correo = "admin@admin.com";
		$scope.usuario.clave = "321";
	}

	$scope.Guardar=function(){

	/*$auth.authenticate('github')
	  .then(function(response) {
	    alert(response);
	  })
	  .catch(function(response) {
	    alert(response);
	  });*/
	$auth.login($scope.usuario)
	  .then(function(response) {
	    console.info("correcto", response); //Sabemos que nos devuelve un token correcto SOLO CON EL ISAUTHENTICATED
	    if ($auth.isAuthenticated()){
	    	console.info("token", $auth.getPayload());
	    	UsuarioActual.login($auth.getPayload().nombre, $auth.getPayload().correo,  $auth.getPayload().tipo,$auth.getPayload().foto);
	    	$rootScope.userActual = JSON.parse(UsuarioActual.getFullData());
	    	$rootScope.userActual.login = true;
	    	console.log($rootScope.userActual);
	    	$state.go('inicio');
	    }
	    else
	    	console.info("no token", $auth.getPayload());
	  })
	  .catch(function(response) {
	    console.info("NO volvio bien", response);
	  });

	}
	
})