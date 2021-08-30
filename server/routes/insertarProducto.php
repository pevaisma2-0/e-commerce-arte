<?php
    header('Content-Type: application/json');
    $conexion = new mysqli("localhost", "root", "","e-commerce") or die("Error al conectar la base de datos");
    $titulo = $_POST['titulo'];

    echo json_encode($titulo);