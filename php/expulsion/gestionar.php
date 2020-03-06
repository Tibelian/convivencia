<?php

require '../conexion.php';

$conexion->select_db("bd_convivencia");

if(isset($_GET['id']) && isset($_GET['estado'])){

    $sql = null;
    $id = (int) $_GET['id'];
    if($_GET['estado'] == "expulsar"){
        $sql = "
            UPDATE expulsion 
            SET control_jefatura = 'aprobada'
            WHERE id = $id;
        ";
    }else if($_GET['estado'] == "amonestar"){
        $sql = "
            SELECT e.*, c.denominacion
            FROM expulsion e
            INNER JOIN causa_expulsion c
            ON c.id = e.id_causa
            WHERE e.id = $id;
        ";
    }

    if($sql){
        if($result = $conexion->query($sql)){
    
            if($_GET['estado'] == 'amonestar'){
                if($result->num_rows == 1){

                    $data = $result->fetch_assoc();
                    $insertCaus = "
                        INSERT INTO causa_amonestacion(id, denominacion)
                        VALUES(NULL, '{$data['denominacion']}');
                    ";

                    if($conexion->query($insertCaus)){

                        $idCausa = $conexion->insert_id;
                        $insertAmon = "
                            INSERT INTO amonestacion(
                                id, 
                                id_alumno, 
                                id_profesor, 
                                id_asignatura, 
                                id_causa, 
                                id_sancion, 
                                fecha
                            )
                            VALUES(
                                NULL, 
                                {$data['id_alumno']}, 
                                {$data['id_profesor']}, 
                                {$data['id_asignatura']}, 
                                {$idCausa}, 
                                {$data['id_sancion']}, 
                                {$data['fecha']}
                            );
                        ";
                        if($conexion->query($insertAmon)){

                            if($conexion->query("DELETE FROM expulsion WHERE id = $id")){
                                $msg = ["resultado" => "OK", "datos" => "La expulsión se ha convertido en una amonestación"];
                            }else{
                                $msg = ["resultado" => "ERROR", "datos" => "ERROR AL ELIMINAR LA EXPULSIÓN: " . $conexion->error];
                            }

                        }else{
                            $msg = ["resultado" => "ERROR", "datos" => "ERROR AL INSERTAR LA AMONESTACIÓN: " . $conexion->error];
                        }

                    }else{
                        $msg = ["resultado" => "ERROR", "datos" => "ERROR AL INSERTAR CAUSA EN AMONESTACIÓN: " . $conexion->error];
                    }

                }else{
                    $msg = ["resultado" => "ERROR", "datos" => "NO SE HA ENCONTRADO LA EXPULSIÓN"];
                }
            }else{
                $msg = ["resultado" => "OK", "datos" => "Estado actualizado, la expulsión ha sido aprobada"];
            }

        }else{
            $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'expulsion/gestionar' - " . $conexion->error ];
        }
    }else{
        $msg = ["resultado" => "ERROR", "datos" => "El estado '{$_GET['estado']}' que has indicado no es válido"];
    }

    



}else{
    $msg = ["resultado" => "ERROR", "datos" => "Faltan los parametros id y estado"];
}

echo json_encode($msg);
