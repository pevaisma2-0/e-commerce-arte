<?php
router("GET","/carrito/:id_usuario", function($id_usuario){
    include_once("./models/carrito.php");
    echo mostrar_carrito($id_usuario);
});
router("POST", "/agregar-carrito", function (){
    include_once("./models/carrito.php");
    $id_carrito = new stdClass();
    $id_carrito->producto = $_POST['id_producto'];
    $id_carrito->usuario = $_POST['id_usuario'];
    echo agregar_carrito($id_carrito);
});
router("POST", "/eliminar-carrito/:id_carrito", function($id_carrito){
    include_once("./models/carrito.php");
    echo eliminar_carrito($id_carrito);
});