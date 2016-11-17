angular
  .module('app')
  .factory('factoryRutas', function (){
  	var objeto = {};

    objeto.nombre = "Factory de rutas";

    objeto.RutaProductos = 'http://localhost:8000/Murcia.SPLab42016/ws1/productos/';

    objeto.RutaUsuarios = 'http://localhost:8000/Murcia.SPLab42016/ws1/usuarios/';

    return objeto;


    
  })