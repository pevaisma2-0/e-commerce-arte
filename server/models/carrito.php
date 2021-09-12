<?php
function mostrar_carrito($id_usuario){
    include_once("./conexion.php");
    $mostrar_carrito = $conexion->query("SELECT titulo, precio, dni, username, id_producto, id_carrito FROM `carrito` INNER JOIN usuarios INNER JOIN productos 
                                        ON carrito.fk_usuario = usuarios.dni AND carrito.fk_producto = productos.id_producto 
                                        WHERE fk_usuario =".$id_usuario);
    $resultado = $mostrar_carrito->fetch_all(1);
    
    return json_encode($resultado);
}
function agregar_carrito($id_carrito){
    include_once("./conexion.php");
    $agregar_carrito = $conexion->query("INSERT INTO carrito VALUES (null, '$id_carrito->usuario', '$id_carrito->producto')");
    return json_encode("Agregado al carrito");
}
function eliminar_carrito($id_carrito){
    include_once("./conexion.php");
    $mostrar_carrito = $conexion->query("DELETE FROM carrito WHERE id_carrito = ".$id_carrito);

    return json_encode("Producto eliminado");
}
