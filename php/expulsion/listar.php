<?php

require '../conexion.php';

$conexion->select_db("bd_convivencia");
$sql = "
    SELECT a.nombre as nombre_alumno, a.apellidos as apellidos_alumno,
            p.nombre as nombre_profesor, p.apellidos as apellidos_profesor,
            ex.fecha, c.denominacion as causa, ex.control_jefatura
    FROM bd_convivencia.expulsion ex
    INNER JOIN bd_datos.alumno a
    ON a.id = ex.id_alumno
    INNER JOIN bd_datos.profesor p
    ON p.id = ex.id_profesor
    INNER JOIN bd_convivencia.causa_expulsion c
    ON c.id = ex.id_causa
";
if($result = $conexion->query($sql)){

    if($result->num_rows > 0){
        $expulsionesListado = [];
        while($expulsion = $result->fetch_assoc()){
            $expulsionesListado[] = $expulsion;
        }
        $msg = ["resultado" => "OK", "datos" => $expulsionesListado];
    }else{
        $msg = ["resultado" => "OK", "datos" => []];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'expulsion/listar' - " . $conexion->error ];
}


echo json_encode($msg);
