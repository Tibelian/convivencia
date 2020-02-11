<?php

require 'conexion.php';

if($_GET['id_grupo']){

    $idG = (int) $_GET['id_grupo'];
    $conexion->select_db("bd_datos");
    $sql = "
        SELECT id, nombre, apellidos
        FROM alumno
        WHERE id_grupo = $idG
    ";
    if($result = $conexion->query($sql)){

        if($result->num_rows > 0){
            $grupoListado = [];
            while($grupo = $result->fetch_assoc()){
                $grupoListado[] = $grupo;
            }
            $msg = ["resultado" => "OK", "datos" => $grupoListado];
        }else{
            $msg = ["resultado" => "OK", "datos" => []];
        }

    }else{
        $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'obtenerAlumnos' - " . $conexion->error];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Falta indicar el parametro id_grupo"];
}

echo json_encode($msg);
