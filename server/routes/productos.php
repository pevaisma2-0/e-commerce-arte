<?php
//Utilizamos un metodo GET para traer todos los productos.
router("GET", "/productos", function(){
    include_once("./models/productos.php");
    echo mostrar_productos();

});
router("GET", "/producto-categoria/:categoria", function ($categoria){
    include_once('./models/productos.php');
    echo producto_categoria($categoria);
});

