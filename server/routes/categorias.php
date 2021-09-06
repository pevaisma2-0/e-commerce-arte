<?php
router("POST", "/agregar-categoria", function (){
    include_once("./models/categorias.php");
    $datosCategoria = $_POST['nombreCategoria'];
    echo agregar_categoria($datosCategoria);
});
router("GET", "/mostrar-categorias" , function (){
    include_once("./models/categorias.php");
    echo mostrar_categorias();
});