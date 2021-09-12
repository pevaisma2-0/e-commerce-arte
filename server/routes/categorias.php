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
router("POST", "/modificar-categorias", function (){
    include_once("./models/categorias.php");
    $modificar = new stdClass();
    $modificar-> id_categoria = $_POST['id_categoria'];
    $modificar->categoria = $_POST['nombre'];
    echo modificar_categorias($modificar);
});
router("POST", "/eliminar-categoria/:id_categoria", function ($id_categoria){
    include_once("./models/categorias.php");
    echo eliminar_categorias($id_categoria);
});