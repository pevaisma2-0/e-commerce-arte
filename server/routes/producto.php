<?php 
//Tambien utilizamos un metodo get para traer solo un producto por el id
router("GET","/producto-id/:id", function($id){
    include_once("./models/producto.php");
    echo mostrar_id_producto($id);
});
//En este caso utilizamos un metodo POST para enviar informacion que se actualizara en la base de datos. 
router("POST","/producto", function(){
    include_once("./models/producto.php");
    // En el caso de un metodo POST debemos hacer una actualizacion del registro. Vendran datos por metodo POST con los cuales haremos un UPDATE en la base de datos. 
    //El objeto $datos almacena la info que viene por post y la manda como argumento en la funcion modificar_producto()
    $datos = new stdClass();
    $datos->id = 1;
    $datos->nombre = $_POST['nombre'];
    $datos->cantidad = $_POST['cantidad'];
    echo modificar_producto($datos);
});
router("GET", "/mostrar-productos", function (){
    include_once("./models/productos.php");
    echo mostrar_productos();
});
router("POST", "/agregar", function(){
    include_once("./models/producto.php");
    $datosProducto = new stdClass();
    $datosProducto->titulo = $_POST['titulo'];
    $datosProducto->precio = $_POST['precio'];
    $datosProducto->categoria = $_POST['categoria'];
    $datosProducto->imagen = $_FILES['imagen']['name'];
    $datosProducto->imagenTipo = $_FILES['imagen']['type'];
    $datosProducto->descripcion = $_POST['descripcion'];

    $carpeta_destino = $_SERVER['DOCUMENT_ROOT'] . '/e-commerce-ferreyra/boilerplate_front_back_php/imagen/';
    move_uploaded_file($_FILES ['imagen']['tmp_name'] , $carpeta_destino . $datosProducto->imagen);
    
    echo crear_producto($datosProducto);
});

router("GET", "/eliminar-producto/:id", function ($id){
    include_once("./models/producto.php");
    echo eliminar_producto($id);
});
