<?php

require '../conexion.php';

if(isset($_GET['id_profesor']) && isset($_GET['id_grupo'])){

    $idP = (int) $_GET['id_profesor'];
    $idG = (int) $_GET['id_grupo'];
    $conexion->select_db("bd_datos");
    $sql = "
        SELECT a.id, a.denominacion FROM asignatura a
        INNER JOIN profesor_grupo_asignatura p
        ON p.id_asignatura = a.id
        WHERE p.id_profesor = $idP AND p.id_grupo = $idG
        GROUP BY a.id;
    ";
    if($result = $conexion->query($sql)){

        if($result->num_rows > 0){
            $asiganturaListado = [];
            while($asigantura = $result->fetch_assoc()){
                $asiganturaListado[] = $asigantura;
            }
            $msg = ["resultado" => "OK", "datos" => $asiganturaListado];
        }else{
            $msg = ["resultado" => "OK", "datos" => []];
        }

    }else{
        $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'asignatura/listar' - " . $conexion->error];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Parametros necesarios: id_profesor e id_grupo"];
}

echo json_encode($msg);
