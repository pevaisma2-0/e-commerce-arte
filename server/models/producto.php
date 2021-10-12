<?php
//Todos los modelos son consultas a la base de datos para crear actualizar leer y elimnar informacion
//Mostrar seria nuestro leer (SELECT)
function mostrar_id_producto($id){
    include_once("./conexion.php");
    $consulta = $conexion->query("SELECT * FROM productos WHERE id_producto = $id " );
    $resultado = $consulta->fetch_all(1);
    return json_encode($resultado);
}
//Modificar seria nuestro UPDATE
function modificar_producto($datos) {
    //Aca lo unico que se hace es crear un obj con la info que viene y se reeenvia. pero deberan crear una consulta a la base de datos, enviar esta informacion y modificar el registro. y al terminar enviar como  respuesta (return) el mensaje de ok o el mensaje de error
    $producto = new stdClass();
    $producto->id = $datos->id;
    $producto->nombre = $datos->nombre;
    $producto->cantidad = $datos->cantidad;

    return json_encode($producto);
}
// Falta crear las funciones para eliminar y crear un nuevo registro
function crear_producto($datos){
    include_once("./conexion.php");
    $agregarProducto = $conexion->query("INSERT INTO productos VALUES (null, '$datos->titulo', '$datos->descripcion', '$datos->precio', '$datos->imagen', '$datos->categoria')");
    return json_encode("Datos Guardados");
}
function eliminar_producto($id){
    include_once("./conexion.php");
    $consulta = $conexion->query("DELETE FROM `productos` WHERE id_producto = ".$id);
    return json_encode("Producto Eliminado");
}