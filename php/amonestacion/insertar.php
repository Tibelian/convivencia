<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(
    isset($_GET['id_grupo']) && 
    isset($_GET['id_asignatura']) && 
    isset($_GET['id_alumno']) && 
    isset($_GET['id_profesor']) && 
    isset($_GET['causa']) && 
    isset($_GET['fecha'])
){

    require '../conexion.php';
    $conexion->select_db("bd_convivencia");

    ////////////////////////////////
    $conexion->autocommit(false); //
    ////////////////////////////////

    $ok = true;
    if(is_numeric($_GET['causa'])){
        $id_causa = $_GET['causa'];
    }else{
        $sqlCausa = "
            INSERT INTO causa_amonestacion(id, denominacion)
            VALUES(NULL, ?)
        ";
        $stmtCausa = $conexion->stmt_init();
        $stmtCausa->prepare($sqlCausa);
        $stmtCausa->bind_param("s", $_GET['causa']);
        if($stmtCausa->execute()){
            $id_causa = $stmtCausa->insert_id;
        }else{
            $ok = false;
            $conexion->rollback();
            $msg = ["resultado" => "ERROR", "datos" => "No se ha podido introducir la causa - " . $stmtCausa->error];
        }
    }

    if($ok){
        $sql = "
            INSERT INTO amonestacion(id, id_alumno, id_profesor, id_asignatura, id_causa, fecha)
            VALUES(NULL, ?, ?, ?, ?, ?);
        ";
        $stmt = $conexion->stmt_init();
        $stmt->prepare($sql);
        $stmt->bind_param(
            "iiiis",
            $_GET['id_alumno'],
            $_GET['id_profesor'],
            $_GET['id_asignatura'],
            $id_causa,
            $_GET['fecha']
        );
    
        if($stmt->execute()){
            $conexion->commit(true);
            $msg = ["resultado" => "OK", "datos" => "Amonestación guardada con éxito"];
        }else{
            $conexion->rollback();
            $msg = ["resultado" => "ERROR", "datos" => "Ha occurrido un error al guardar la amonestación - " . $stmt->error];
        }
    }

    ////////////////////////////////
    $conexion->autocommit(true);  //        
    ////////////////////////////////

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Debes especifiar: id_grupo, id_asignatura, id_alumno, id_profesor, causa y fecha"];
}


echo json_encode($msg);
