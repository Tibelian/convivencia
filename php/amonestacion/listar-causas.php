<?php

require '../conexion.php';

$conexion->select_db("bd_convivencia");
$sql = "SELECT * FROM causa_amonestacion";
if($result = $conexion->query($sql)){

    if($result->num_rows > 0){
        $causasListado = [];
        while($causa = $result->fetch_assoc()){
            $causasListado[] = $causa;
        }
        $msg = ["resultado" => "OK", "datos" => $causasListado];
    }else{
        $msg = ["resultado" => "OK", "datos" => []];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'listar-causas' - " . $conexion->error ];
}


echo json_encode($msg);
