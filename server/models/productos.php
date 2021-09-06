<?php
function mostrar_productos() {
    include_once("./conexion.php");
    $consulta = $conexion->query("SELECT titulo, precio, categorias.nombre as categoria FROM productos INNER JOIN categorias ON productos.fk_categoria = categorias.id_categoria");
    $registros = $consulta->fetch_all(1);
    return json_encode($registros);

}
