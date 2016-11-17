<?php
include_once '../vendor/autoload.php';
include_once('../../../servidor/Usuarios.php');
use \Firebase\JWT\JWT;
/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$DatosDelModeloPorPost = file_get_contents('php://input');
$usuario = json_decode($DatosDelModeloPorPost);

$usuarioActual = Usuario::AutenticarUsuario($usuario->correo, $usuario->nombre, $usuario->clave);

if (!is_null($usuarioActual)) {
	$key = "aaaa";
	$ClaveDeEncriptacion="estaeslaclave";
	$token["nombre"]=$usuarioActual->nombre;
	$token["tipo"]=$usuarioActual->tipo;
	$token["correo"] = $usuarioActual->correo;
	$token["foto"] = $usuarioActual->foto;
	$token["iat"]=time();
	$token["exp"]=time()+20;

	$jwt = JWT::encode($token, $key);

	$ArrayConToken["segundoparcial"] = $jwt;
} else {
	$ArrayConToken["segundoparcial"] = false;
}

echo json_encode($ArrayConToken);


?>