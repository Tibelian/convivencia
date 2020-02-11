<?php

require 'conexion.php';

$conexion->select_db("bd_convivencia");
$sql = "
    SELECT a.nombre as nombre_alumno, a.apellidos as apellidos_alumno,
            p.nombre as nombre_profesor, a.apellidos as apellidos_profesor,
            am.fecha, c.denominacion as causa 
    FROM bd_convivencia.amonestacion am
    INNER JOIN bd_datos.alumno a
    ON a.id = am.id_alumno
    INNER JOIN bd_datos.profesor p
    ON p.id = am.id_profesor
    INNER JOIN bd_convivencia.causa_amonestacion c
    ON c.id = am.id_causa
";
if($result = $conexion->query($sql)){

    if($result->num_rows > 0){
        $amonestacionesListado = [];
        while($amonestacion = $result->fetch_assoc()){
            $amonestacionesListado[] = $amonestacion;
        }
        $msg = ["resultado" => "OK", "datos" => $amonestacionesListado];
    }else{
        $msg = ["resultado" => "OK", "datos" => []];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'obtenerAmonestados' - " . $conexion->error ];
}


echo json_encode($msg);
