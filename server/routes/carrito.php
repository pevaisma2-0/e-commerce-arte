<?php
router("GET","/carrito/:id_usuario", function($id_usuario){
    include_once("./models/carrito.php");
    echo mostrar_carrito($id_usuario);
});
router("POST", "/eliminar-carrito", function($id_carrito){
    include_once("./models/carrito.php");
    echo eliminar_carrito($id_carrito);
});