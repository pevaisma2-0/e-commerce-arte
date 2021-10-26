<?php
router("POST", "/agregar-usuario", function(){
    include_once('./models/usuario.php');
    $datosusuario = new stdClass();
    $datosusuario->dni = $_POST['dni'];
    $datosusuario->usuario = $_POST['usuario'];
    $datosusuario->password = $_POST['password'];
    $datosusuario->mail = $_POST['mail'];
    $datosusuario->localidad = $_POST['localidad'];
    $datosusuario->postal = $_POST['postal'];
    
    echo agregar_usuario($datosusuario);
});
router("GET", "/eliminar-usuario/:id", function ($id){
    include_once("./models/usuario.php");
    echo eliminar_usuario($id);
});