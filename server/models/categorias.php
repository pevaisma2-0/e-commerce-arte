<?php
function agregar_categoria($categoria){
    include_once("./conexion.php");
    $agregarCategoria = $conexion->query("INSERT INTO categorias VALUES (null, '$categoria')");
    return json_encode("Categoria Agregada");
}
function mostrar_categorias(){
    include_once("./conexion.php");
    $consulta = $conexion->query("SELECT * FROM categorias");
    $registos = $consulta->fetch_all(1);
    return json_encode($registos);
}
function modificar_categorias($modificar){
    include_once("./conexion.php");
    $consulta = $conexion->query("UPDATE categorias SET nombre ='$modificar->categoria' WHERE id_categoria =".$modificar->id_categoria);
    return json_encode("El nombre de la categoria es ahora: ".$modificar->categoria);
}
function eliminar_categorias($id_categoria){
    include_once("./conexion.php");
    $consulta = $conexion->query("DELETE FROM categorias WHERE id_categoria = ".$id_categoria);
    return json_encode("Categoria Eliminada");
}