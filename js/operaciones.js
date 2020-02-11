

//////////////////////////////////////////////////////////
// CREA EL DOM DE LA TABLA CON LOS DATOS DEL AMONESTADO //
//////////////////////////////////////////////////////////
function obtenerAmonestados(tabla){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            //eliminarContenido(tabla);
            if(respuesta.resultado == 'OK'){

                if(respuesta.datos.length < 1){
                    let tr = document.createElement("tr");
                    let aviso = document.createElement("td");
                        aviso.appendChild(document.createTextNode("NO HAY NINGÚN ALUMNO AMONESTADO"));
                        aviso.colSpan = "4";
                        aviso.align = "center";
                        aviso.style.fontSize = "20px";
                        tr.appendChild(aviso);
                        tabla.appendChild(tr);
                }else{
                    for(let i in respuesta.datos){
                        let tr = document.createElement("tr");
                        let profesor = document.createElement("td");
                            profesor.appendChild(document.createTextNode(respuesta.datos[i].nombre_profesor + " " + respuesta.datos[i].apellidos_profesor));
                            tr.appendChild(profesor);
                        let alumno = document.createElement("td");
                        alumno.appendChild(document.createTextNode(respuesta.datos[i].nombre_alumno + " " + respuesta.datos[i].apellidos_alumno));
                            tr.appendChild(alumno);
                        let causa = document.createElement("td");
                        causa.appendChild(document.createTextNode(respuesta.datos[i].causa));
                            tr.appendChild(causa);
                        let fecha = document.createElement("td");
                            fecha.appendChild(document.createTextNode(formatoFecha(respuesta.datos[i].fecha)));
                            tr.appendChild(fecha);
                        tabla.appendChild(tr);
                    }
                }
            }else{
                muestraAlerta('warning', respuesta.datos);
            }
        }
    };
    xhttp.open("GET", `./php/obtenerAmonestados.php`, true);
    xhttp.send();
}


/////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS GRUPO DEL PROFESOR //
/////////////////////////////////////////////////////////
function obtenerGrupos(select){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            eliminarContenido(select);
            if(respuesta.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in respuesta.datos){
                    let option = document.createElement("option");
                        option.value = respuesta.datos[i].id_grupo;
                        option.appendChild(document.createTextNode(respuesta.datos[i].grupo));
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', respuesta.datos);
            }
        }
    };
    xhttp.open("GET", `./php/obtenerGrupos.php?id_profesor=${PROFESOR.id}`, true);
    xhttp.send();
}


////////////////////////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LAS ASIGNATURAS DE UN PROFESOR Y UN GRUPO //
////////////////////////////////////////////////////////////////////////////
function obtenerAsignaturas(select, id_grupo){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            eliminarContenido(select);
            if(respuesta.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in respuesta.datos){
                    let option = document.createElement("option");
                        option.value = respuesta.datos[i].id;
                        option.appendChild(document.createTextNode(respuesta.datos[i].denominacion));
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', respuesta.datos);
            }
        }
    };
    xhttp.open("GET", `./php/obtenerAsignaturas.php?id_profesor=${PROFESOR.id}&id_grupo=${id_grupo}`, true);
    xhttp.send();
}


//////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS ALUMNOS DE UN GRUPO //
//////////////////////////////////////////////////////////
function obtenerAlumnos(select, id_grupo){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            eliminarContenido(select);
            if(respuesta.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in respuesta.datos){
                    let option = document.createElement("option");
                        option.value = respuesta.datos[i].id;
                        option.appendChild(
                            document.createTextNode(respuesta.datos[i].apellidos + ", " + respuesta.datos[i].nombre)
                        );
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', respuesta.datos);
            }
        }
    };
    xhttp.open("GET", `./php/obtenerAlumnos.php?id_grupo=${id_grupo}`, true);
    xhttp.send();
}


/////////////////////////////////////////////////////////
// GUARDA LOS DATOS DEL AMONESTADO EN LA BASE DE DATOS //
/////////////////////////////////////////////////////////
function guardarAmonestacion(datos){

    let ok = true;
    if(
        datos.grupo == "" || 
        datos.alumno == "" || 
        datos.asignatura == "" || 
        datos.causa.length < 10 || 
        datos.fecha == ""
    ){ok = false;}

    if(ok){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let respuesta = JSON.parse(this.responseText);
                if(respuesta.resultado == 'OK'){
                    muestraAlerta('success', respuesta.datos);
                }else{
                    muestraAlerta('warning', respuesta.datos);
                }
            }
        };
        xhttp.open("GET", `./php/insertarAmonestacion.php?id_grupo=${datos.grupo}&id_alumno=${datos.alumno}&id_asignatura=${datos.asignatura}&id_profesor=${PROFESOR.id}&causa=${datos.causa}&fecha=${datos.fecha}`, true);
        xhttp.send();
    }else{
        muestraAlerta('warning', 'Completa todos los campos obligatorios');
    }
}