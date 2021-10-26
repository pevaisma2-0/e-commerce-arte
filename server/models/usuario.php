<?php
function agregar_usuario($datos){
    include_once("./conexion.php");
    $consulta = $conexion->query("INSERT INTO usuarios VALUES ($datos->dni,'$datos->usuario','$datos->password','$datos->mail','$datos->localidad','$datos->postal')");
    return json_encode("Usuario Agregado");
}
function eliminar_usuario($id){
    include_once("./conexion.php");
    $consulta = $conexion->query("DELETE FROM usuarios WHERE dni = ".$id);
    return json_encode("usuario eliminado");
}