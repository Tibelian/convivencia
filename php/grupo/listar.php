<?php

require '../conexion.php';

if($_GET['id_profesor']){

    $idP = (int) $_GET['id_profesor'];
    $conexion->select_db("bd_datos");
    $sql = "
        SELECT g.id as id_grupo, g.denominacion as grupo FROM grupo g
        INNER JOIN profesor_grupo_asignatura p
        ON p.id_grupo = g.id
        WHERE p.id_profesor = $idP
        GROUP BY g.id
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
        $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'obtenerGrupos' - " . $conexion->error];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Falta indicar el parametro id_profesor"];
}

echo json_encode($msg);
