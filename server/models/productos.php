<?php
function mostrar_productos() {
    include_once("./conexion.php");
    $consulta = $conexion->query("SELECT id_producto, titulo, precio, descripcion, categorias.nombre as categoria FROM productos INNER JOIN categorias ON productos.fk_categoria = categorias.id_categoria");
    $registros = $consulta->fetch_all(1);
    return json_encode($registros);

}
function producto_categoria($categoria){
    include_once('./conexion.php');
    $consulta = $conexion->query("SELECT id_producto, titulo, precio, imagen, descripcion, categorias.nombre AS categoria FROM productos INNER JOIN categorias ON categorias.id_categoria = productos.fk_categoria WHERE categorias.id_categoria =".$categoria );
    $registros = $consulta->fetch_all(1);
    return json_encode($registros);
}