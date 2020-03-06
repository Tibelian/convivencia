<?php

require '../conexion.php';

if(isset($_GET['dni'])){

    $conexion->select_db("bd_datos");
    $dni = $conexion->real_escape_string($_GET['dni']);
    $sql = "
        SELECT a.id, a.nombre, a.apellidos, a.dni, g.denominacion AS grupo
        FROM alumno a
        LEFT JOIN grupo g
        ON g.id = a.id_grupo
        WHERE a.dni = '$dni'
    ";
    if($result = $conexion->query($sql)){

        if($result->num_rows == 1){

            $data = $result->fetch_assoc();

            $alumno = [];
            $alumno['id'] = $data['id'];
            $alumno['nombre'] = $data['nombre'];
            $alumno['apellidos'] = $data['apellidos'];
            $alumno['dni'] = $data['dni'];

            $amonestaciones = getAmonestaciones($alumno['id']);
            $expulsiones = getExpulsiones($alumno['id']);
            $sancionesDirectas = getSancionesDirectas($alumno['id']);

            $datos = [
                "alumno" => $alumno,
                "amonestaciones" => $amonestaciones,
                "expulsiones" => $expulsiones,
                "sanciones_directas" => $sancionesDirectas
            ];
            
            $msg = ["resultado" => "OK", "datos" => $datos];

        }else{
            $msg = ["resultado" => "OK", "datos" => []];
        }

    }else{
        $msg = ["resultado" => "ERROR", "datos" => "No se han podido ejecutar la consulta 'sancion/listar' - " . $conexion->error];
    }

}else{
    $msg = ["resultado" => "ERROR", "datos" => "Falta indicar el parametro dni"];
}

echo json_encode($msg);



// devuelve amonestaciones del alumno con el id que se le indica
function getAmonestaciones($id){

    global $conexion; $listado = [];
    $sqlAmonestaciones = "
        SELECT a.fecha, p.nombre, p.apellidos, p.id AS id_profesor,
        aa.denominacion AS asignatura, ca.denominacion AS causa, a.id,
        s.id AS id_sancion, s.fecha AS fecha_sancion, s.denominacion AS sancion

        FROM bd_convivencia.amonestacion a

        LEFT JOIN bd_convivencia.causa_amonestacion ca
        ON ca.id = a.id_causa

        LEFT JOIN bd_datos.profesor p
        ON p.id = a.id_profesor

        LEFT JOIN bd_datos.asignatura aa
        ON aa.id = a.id_asignatura

        LEFT JOIN bd_convivencia.sancion s
        ON s.id = a.id_sancion

        WHERE a.id_alumno = $id
        ORDER BY a.fecha;
    ";
    if($result = $conexion->query($sqlAmonestaciones)){
        if($result->num_rows > 0){
            while($data = $result->fetch_assoc()){
                $profesor = [
                    "id" => $data['id_profesor'],
                    "nombre" => $data['nombre'],
                    "apellidos" => $data['apellidos'],
                    "asignatura" => $data['asignatura']
                ];
                $sancion = [
                    "id" => $data['id_sancion'],
                    "fecha" => $data['fecha_sancion'],
                    "denominacion" => $data['sancion']
                ];
                $listado[] = [
                    "profesor" => $profesor,
                    "id" => $data['id'],
                    "causa" => $data['causa'],
                    "fecha" => $data['fecha'],
                    "sancion" => $sancion
                ];
            }
        }
    }else{ echo $conexion->error; }
    return $listado;

}


// devuelve expulsiones del alumno con el id que se le indica
function getExpulsiones($id){

    global $conexion; $listado = [];
    $sql = "
        SELECT e.id, e.id_profesor, e.id_sancion,
        p.nombre, p.apellidos, aa.denominacion AS asignatura,
        s.fecha AS fecha_sancion, s.denominacion AS sancion,
        ce.denominacion AS causa, e.fecha

        FROM bd_convivencia.expulsion e

        LEFT JOIN bd_convivencia.causa_expulsion ce
        ON ce.id = e.id_causa

        LEFT JOIN bd_datos.profesor p
        ON p.id = e.id_profesor

        LEFT JOIN bd_datos.asignatura aa
        ON aa.id = e.id_asignatura
        
        LEFT JOIN bd_convivencia.sancion s
        ON s.id = e.id_sancion

        WHERE e.id_alumno = $id
        ORDER BY e.fecha;
    ";
    if($result = $conexion->query($sql)){
        if($result->num_rows > 0){
            while($data = $result->fetch_assoc()){
                $profesor = [
                    "id" => $data['id_profesor'],
                    "nombre" => $data['nombre'],
                    "apellidos" => $data['apellidos'],
                    "asignatura" => $data['asignatura']
                ];
                $sancion = [
                    "id" => $data['id_sancion'],
                    "fecha" => $data['fecha_sancion'],
                    "denominacion" => $data['sancion']
                ];
                $listado[] = [
                    "profesor" => $profesor,
                    "id" => $data['id'],
                    "causa" => $data['causa'],
                    "fecha" => $data['fecha'],
                    "sancion" => $sancion
                ];
            }
        }
    }else{ echo $conexion->error; }
    return $listado;

}


// devuelve sanciones directas del alumno con el id que se le indica
function getSancionesDirectas($id){

    global $conexion; $listado = [];
    $sql = "
        SELECT sd.id, p.id AS id_profesor, s.id AS id_sancion,
        p.nombre, p.apellidos, aa.denominacion as asignatura,
        s.fecha, s.denominacion AS sancion

        FROM bd_convivencia.sancion_directa sd

        LEFT JOIN bd_datos.profesor p
        ON p.id = sd.id_profesor

        LEFT JOIN bd_datos.profesor_grupo_asignatura pga
        ON pga.id_profesor = p.id

        LEFT JOIN bd_datos.asignatura aa
        ON aa.id = pga.id_asignatura

        LEFT JOIN bd_convivencia.sancion s
        ON s.id = sd.id_sancion

        WHERE sd.id_alumno = $id
        GROUP BY sd.id
        ORDER BY s.fecha;
    ";
    if($result = $conexion->query($sql)){
        if($result->num_rows > 0){
            while($data = $result->fetch_assoc()){
                $profesor = [
                    "id" => $data['id_profesor'],
                    "nombre" => $data['nombre'],
                    "apellidos" => $data['apellidos'],
                    "asignatura" => $data['asignatura']
                ];
                $listado[] = [
                    "profesor" => $profesor,
                    "id_directa" => $data['id'],
                    "id_sancion" => $data['id_sancion'],
                    "fecha" => $data['fecha'],
                    "denominacion" => $data['sancion']
                ];
            }
        }
    }else{ echo $conexion->error; }
    return $listado;

}

