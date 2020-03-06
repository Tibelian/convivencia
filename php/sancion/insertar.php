<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(
    isset($_GET['id_alumno']) && 
    isset($_GET['id_profesor']) && 
    isset($_GET['sancion']) && 
    isset($_GET['fecha'])
){

    require '../conexion.php';
    $conexion->select_db("bd_convivencia");

    ////////////////////////////////
    $conexion->autocommit(false); //
    ////////////////////////////////

    $ok = true;
    $idSancion = null;
    $sqlSancion = "
        INSERT INTO sancion(id, fecha, denominacion)
        VALUES(NULL, ?, ?)
    ";
    $stmtSancion = $conexion->stmt_init();
    $stmtSancion->prepare($sqlSancion);
    $stmtSancion->bind_param("ss", $_GET['fecha'], $_GET['sancion']);
    if($stmtSancion->execute()){
        $idSancion = $stmtSancion->insert_id;
    }else{
        $ok = false;
        $conexion->rollback();
        $msg = ["resultado" => "ERROR", "datos" => "No se ha podido introducir la sanción - " . $stmtSancion->error];
    }

    if($ok){

        if(isset($_GET['falta']) && isset($_GET['id_falta'])){
            $tabla = "amonestacion";
            $idFalta = (int) $_GET['id_falta'];
            if($_GET['falta'] == "expulsion"){
                $tabla = "expulsion";
            }
            $sql = "UPDATE $tabla SET id_sancion = $idSancion WHERE id = $idFalta";
        }else{
            $idAlumno = (int) $_GET['id_alumno'];
            $idProfesor = (int) $_GET['id_profesor'];
            $sql = "
                INSERT INTO sancion_directa(id, id_alumno, id_profesor, id_sancion)
                VALUES(NULL, $idAlumno, $idProfesor, $idSancion);
            ";
        }

        if($conexion->query($sql)){
            $conexion->commit(true);
            $msg = ["resultado" => "OK", "datos" => "La sanción ha sido guardada con éxito"];
        }else{
            $conexion->rollback();
            $msg = ["resultado" => "ERROR", "datos" => "Ha occurrido un error al guardar la sanción - " . $conexion->error];
        }
    }

    ////////////////////////////////
    $conexion->autocommit(true);  //        
    ////////////////////////////////

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Debes especifiar: id_alumno, id_profesor, sanción y fecha"];
}


echo json_encode($msg);
