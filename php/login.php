<?php
require_once 'conexion.php';

$sql = "SELECT * FROM profesor WHERE 1 = 1";
if($resultado = $connDatos->query($sql)){
    if($resultado->num_rows == 1){
        echo json_encode(["resultado" => "OK", "datos" => ["id" => 1, "nombre" => "JUAN", "apellidos" => "GARCÍA"]]);
    }else{
        echo json_encode(["resultado" => "ERROR", "datos" => "Credenciales no válidos"]);
    }
}
