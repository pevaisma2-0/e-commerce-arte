<?php
function mostrar_carrito($id_usuario){
    include_once("./conexion.php");
    $mostrar_carrito = $conexion->query("SELECT titulo, precio, username FROM `carrito` INNER JOIN usuarios INNER JOIN productos 
                                        ON carrito.fk_usuario = usuarios.dni AND carrito.fk_producto = productos.id_producto 
                                        WHERE fk_usuario =".$id_usuario);
    $resultado = $mostrar_carrito->fetch_all(1);
    
    return json_encode($resultado);
}
