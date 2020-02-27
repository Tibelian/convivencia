<?php

$conexion = new mysqli("127.0.0.1", "root", "");

if($conexion->connect_error){
    echo json_encode(["resultado" => "ERROR", "datos" => "La conexión a la base de datos ha fallado"]);
    exit;
}
