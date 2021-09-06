<?php
router("GET","/carrito/:id_usuario", function($id_usuario){
    include_once("./models/carrito.php");
    echo mostrar_carrito($id_usuario);
});