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
            INSERT INTO causa_expulsion(id, denominacion)
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
            INSERT INTO expulsion(id_alumno, id_profesor, id_asignatura, id_causa, fecha)
            VALUES(?, ?, ?, ?, ?);
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
            $msg = ["resultado" => "OK", "datos" => "La solicitud de la expulsión ha sido guardada con éxito"];
            
            // se envía el correo
            $mensaje = "
                <p>Señor Jefe de Estudios, <br> Le notificamos en un profesor ha solicitado la expulsión de un alumno.</p>
                <p>Para más información acceda a la aplicación web 'Convivencia'.</p>
            ";
            if(@mail("iuliandafinescu@gmail.com", "Convivencia - Solicitud de expulsión", $mensaje)){
                $msg["datos"] .= " - El jefe de estudios ha sido notificado por correo sobre esta expulsión.";
            }else{
                $msg["datos"] .= " - Pero no se ha podido notificar al jefe de estudios por correo.";
            }

        }else{
            $conexion->rollback();
            $msg = ["resultado" => "ERROR", "datos" => "Ha occurrido un error al guardar la solicitud de expulsión - " . $stmt->error];
        }
    }

    ////////////////////////////////
    $conexion->autocommit(true);  //        
    ////////////////////////////////

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Debes especifiar: id_grupo, id_asignatura, id_alumno, id_profesor, causa y fecha"];
}


echo json_encode($msg);
