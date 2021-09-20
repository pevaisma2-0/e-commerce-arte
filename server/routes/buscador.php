<?php
router("GET", "/buscar-titulo/:nombreProducto", function ($nombreProducto){
    include_once("./models/buscador.php");
    echo buscar_titulo($nombreProducto);
});
router("GET", "/buscar-categoria/:categoria", function ($categoria){
    include_once("./models/buscador.php");
    echo buscar_categoria($categoria);
});