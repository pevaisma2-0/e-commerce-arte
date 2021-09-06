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