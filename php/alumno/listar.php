<?php

require '../conexion.php';

if(isset($_GET['id_grupo'])){

    $idG = (int) $_GET['id_grupo'];
    $conexion->select_db("bd_datos");
    $sql = "
        SELECT a.id, a.nombre, a.apellidos, g.denominacion as grupo, a.dni,
        f.nombre as familia_nombre, f.apellidos as familia_apellidos,
        f.correo as familia_correo, f.telefono as familia_telefono
        FROM alumno a 
        LEFT JOIN alumno_familia af
        ON af.id_alumno = a.id
        LEFT JOIN familia f
        ON f.id = af.id_familia
        LEFT JOIN grupo g
        ON g.id = a.id_grupo 
    ";
    if($idG != 0){
        $sql .= " WHERE a.id_grupo = $idG ";
        if(isset($_GET['dni'])){
            $dni = $conexion->real_escape_string($_GET['dni']);
            $sql .= " AND a.id = '$dni' ";
        }
    }else{
        if(isset($_GET['dni'])){
            $dni = $conexion->real_escape_string($_GET['dni']);
            $sql .= " WHERE a.dni = '$dni' ";
        }
    }
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
        $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'alumno/listar' - " . $conexion->error];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Falta indicar el parametro id_grupo"];
}

echo json_encode($msg);
