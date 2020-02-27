<?php
require_once 'conexion.php';

if(isset($_GET['usuario']) && isset($_GET['clave'])){

    $conexion->select_db("bd_datos");
    $usuario = $conexion->real_escape_string($_GET['usuario']);
    $clave = $conexion->real_escape_string($_GET['clave']);

    $sql = "SELECT * FROM profesor WHERE usuario = '$usuario' AND clave = PASSWORD('$clave')";
    if($resultado = $conexion->query($sql)){
        if($resultado->num_rows == 1){
            echo json_encode(["resultado" => "OK", "datos" => $resultado->fetch_assoc()]);
        }else{
            echo json_encode(["resultado" => "ERROR", "datos" => "Credenciales no válidos"]);
        }
    }

}
