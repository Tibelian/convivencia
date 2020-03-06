<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'conexion.php';

if(isset($_GET['usuario']) && isset($_GET['clave'])){

    $conexion->select_db("bd_datos");
    $usuario = $conexion->real_escape_string($_GET['usuario']);
    $clave = $conexion->real_escape_string($_GET['clave']);

    $sql = "
        SELECT pp.id, p.perfil, p.usuario, p.clave,
        pp.nombre, pp.apellidos, pp.telefono 

        FROM bd_convivencia.perfil p 

        LEFT JOIN bd_datos.profesor pp
        ON pp.id = p.id_profesor

        WHERE p.usuario = '$usuario'
        AND p.clave = PASSWORD('$clave')
    ";
    if($resultado = $conexion->query($sql)){
        if($resultado->num_rows == 1){
            echo json_encode(["resultado" => "OK", "datos" => $resultado->fetch_assoc()]);
        }else{
            echo json_encode(["resultado" => "ERROR", "datos" => "Credenciales no válidos"]);
        }
    }else{
        echo json_encode(["resultado" => "ERROR", "datos" => $conexion->error]);
    }

}
