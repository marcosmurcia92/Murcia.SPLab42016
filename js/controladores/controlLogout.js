angular.module('app.controllers')

.controller('logoutCtrl', function($scope, $auth, UsuarioActual, $state, $rootScope){

	$scope.Logout = function (){

		$auth.logout();

		UsuarioActual.login("", "", "");

		$rootScope.userActual = {};
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";

		$state.go('log.login');

	};

})