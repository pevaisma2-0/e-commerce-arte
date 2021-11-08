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
    include_once("./conexion.php");
    $consulta = $conexion->query("UPDATE productos SET titulo='$datos->titulo',descripcion='$datos->descripcion',precio='$datos->precio',imagen='$datos->imagen' ,fk_categoria = '$datos->categoria' WHERE id_producto = $datos->id");

    return json_encode("Producto Modificado");
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
function categoria_productos($categoria){
    include_once("./conexion.php");
    if ($categoria == null) {
        echo json_encode(["valor"=>"true"]);
    }
    return;
    $productosCat = "SELECT id_producto,titulo,descripcion,precio, imagen,categorias.nombre as categoria FROM productos INNER JOIN categorias ON productos.fk_categoria = categorias.id_categoria WHERE categorias.id_categoria = ".$categoria;
    $consulta = $conexion->query($productosCat);
    $row = $consulta->fetch_all(1);
    if ($consulta->num_rows ==  null) {
        $all = $conexion->query("SELECT id_producto,titulo,descripcion,precio, imagen,categorias.nombre as categoria FROM productos INNER JOIN categorias ON productos.fk_categoria = categorias.id_categoria");
        $rowAll = $all->fetch_all(1);
        echo json_encode($rowAll);
    }else {
        echo json_encode($row);
    }
}