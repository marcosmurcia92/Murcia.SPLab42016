angular
	.module('app')
	.factory('UsuarioActual', [function(){

		var nombre = "";
		var correo = "";
		var tipo = "";
		var foto = "";

		return {

			login:function(name,mail,type,photo){

				nombre = name;
				correo = mail;
				tipo = type;
				foto = photo;

			},getName:function(){
				return nombre;
			},getEmail:function(){
				return correo;
			},getTipo:function(){
				return tipo;
			},getFoto:function(){
				return foto;
			},getFullData:function(){
				var jsonUsuario = {};
				jsonUsuario.nombre = nombre;
				jsonUsuario.correo = correo;
				jsonUsuario.tipo = tipo;
				jsonUsuario.foto = foto;

				return JSON.stringify(jsonUsuario);
			}

		};

	}])