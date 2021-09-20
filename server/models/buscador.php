<?php
function buscar_titulo($titulo){
    include_once("./conexion.php");
    $buscar = $conexion->query("SELECT * FROM `productos` WHERE `titulo` LIKE '".$titulo."%'");
    $resultado = $buscar->fetch_all(1);
    return json_encode($resultado);
}
function buscar_categoria($categoria){
    include_once("./conexion.php");
    $buscar = $conexion->query("SELECT titulo, precio, descripcion, categorias.nombre as categoria FROM `productos` INNER JOIN categorias ON productos.fk_categoria = categorias.id_categoria WHERE nombre LIKE '".$categoria."%'");
    $resultado = $buscar->fetch_all(1);
    return json_encode($resultado);
}