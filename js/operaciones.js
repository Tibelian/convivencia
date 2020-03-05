

//////////////////////////////////////////////////////////
// CREA EL DOM DE LA TABLA CON LOS DATOS DEL AMONESTADO //
//////////////////////////////////////////////////////////
function obtenerAmonestados(tabla){
    fetch(`./php/amonestacion/listar.php`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            if(myJson.resultado === 'OK'){
                if(myJson.datos.length < 1){
                    let tr = document.createElement("tr");
                    let aviso = document.createElement("td");
                        aviso.appendChild(document.createTextNode("NO HAY NINGÚN ALUMNO AMONESTADO"));
                        aviso.colSpan = "4";
                        aviso.align = "center";
                        aviso.style.fontSize = "20px";
                        tr.appendChild(aviso);
                        tabla.appendChild(tr);
                }else{
                    for(let i in myJson.datos){
                        let tr = document.createElement("tr");
                        let profesor = document.createElement("td");
                            profesor.appendChild(document.createTextNode(myJson.datos[i].nombre_profesor + " " + myJson.datos[i].apellidos_profesor));
                            tr.appendChild(profesor);
                        let alumno = document.createElement("td");
                        alumno.appendChild(document.createTextNode(myJson.datos[i].nombre_alumno + " " + myJson.datos[i].apellidos_alumno));
                            tr.appendChild(alumno);
                        let causa = document.createElement("td");
                        causa.appendChild(document.createTextNode(myJson.datos[i].causa));
                            tr.appendChild(causa);
                        let fecha = document.createElement("td");
                            fecha.appendChild(document.createTextNode(formatoFecha(myJson.datos[i].fecha)));
                            tr.appendChild(fecha);
                        tabla.appendChild(tr);
                    }
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            muestraAlerta('warning', error);
        });
}


/////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS GRUPO DEL PROFESOR //
/////////////////////////////////////////////////////////
function obtenerGrupos(select){
    fetch(`./php/grupo/listar.php?id_profesor=${PROFESOR.id}`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            if(myJson.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in myJson.datos){
                    let option = document.createElement("option");
                        option.value = myJson.datos[i].id_grupo;
                        option.appendChild(document.createTextNode(myJson.datos[i].grupo));
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        }).catch(error => {
            muestraAlerta('warning', error);
        });
}


////////////////////////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LAS ASIGNATURAS DE UN PROFESOR Y UN GRUPO //
////////////////////////////////////////////////////////////////////////////
function obtenerAsignaturas(select, id_grupo){
    fetch(`./php/asignatura/listar.php?id_profesor=${PROFESOR.id}&id_grupo=${id_grupo}`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            eliminarContenido(select);
            if(myJson.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in myJson.datos){
                    let option = document.createElement("option");
                        option.value = myJson.datos[i].id;
                        option.appendChild(document.createTextNode(myJson.datos[i].denominacion));
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            muestraAlerta('warning', error);
        })
}


//////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS ALUMNOS DE UN GRUPO //
//////////////////////////////////////////////////////////
function obtenerAlumnos(select, id_grupo = 0){
    fetch(`./php/alumno/listar.php?id_grupo=${id_grupo}`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            eliminarContenido(select);
            if(myJson.resultado == 'OK'){
                select.appendChild(document.createElement("option"));
                for(let i in myJson.datos){
                    let option = document.createElement("option");
                        option.value = myJson.datos[i].id;
                        option.appendChild(
                            document.createTextNode(myJson.datos[i].apellidos + ", " + myJson.datos[i].nombre)
                        );
                    select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            muestraAlerta('warning', error);
        });
}


//////////////////////////////////////////////////////////
// CREA EL DOM DE UNA TABLA CON LOS ALUMNOS DE UN GRUPO //
//////////////////////////////////////////////////////////
function obtenerAlumnosTabla(table){
    fetch("./php/alumno/listar.php?id_grupo=0")
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            if(myJson.resultado == 'OK'){
                for(let i in myJson.datos){
                    let tr = document.createElement("tr");
                    let nombre = document.createElement("td");
                        nombre.appendChild(document.createTextNode(myJson.datos[i].nombre + ", " + myJson.datos[i].apellidos));
                        tr.appendChild(nombre);
                    let familiar = document.createElement("td");
                    let nombreFamiliar;
                    if(myJson.datos[i].familia_nombre == null){
                        nombreFamiliar = document.createTextNode("Desconocido");
                    }else{
                        nombreFamiliar = document.createTextNode(myJson.datos[i].familia_nombre + ", " + myJson.datos[i].familia_apellidos);
                    }
                    familiar.appendChild(nombreFamiliar);
                    tr.appendChild(familiar);
                    let grupo = document.createElement("td");
                        grupo.appendChild(document.createTextNode(myJson.datos[i].grupo));
                        tr.appendChild(grupo);
                    table.appendChild(tr);
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            console.log(error);
            muestraAlerta('warning', error);
        });
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
        datos.causa == "" || 
        datos.fecha == ""
    ){ok = false;}

    if(ok){

        fetch(`./php/amonestacion/insertar.php?id_grupo=${datos.grupo}&id_alumno=${datos.alumno}&id_asignatura=${datos.asignatura}&id_profesor=${PROFESOR.id}&causa=${datos.causa}&fecha=${datos.fecha}`)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                if(myJson.resultado === 'OK'){
                    muestraAlerta('success', myJson.datos);
                    mostrarAmonestaciones();
                }else{
                    muestraAlerta('warning', myJson.datos);
                }
            })
            .catch(error => {
                muestraAlerta('warning', error);
            });

    }else{
        muestraAlerta('warning', 'Completa todos los campos obligatorios');
    }
    
}


////////////////////////////////////////////////////////
// GUARDA LOS DATOS DEL EXPULSADO EN LA BASE DE DATOS //
////////////////////////////////////////////////////////
function guardarExpulsion(datos){

    let ok = true;
    if(
        datos.grupo == "" || 
        datos.alumno == "" || 
        datos.asignatura == "" || 
        datos.causa == "" || 
        datos.fecha == ""
    ){ok = false;}

    if(ok){

        fetch(`./php/expulsion/insertar.php?id_grupo=${datos.grupo}&id_alumno=${datos.alumno}&id_asignatura=${datos.asignatura}&id_profesor=${PROFESOR.id}&causa=${datos.causa}&fecha=${datos.fecha}`)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                if(myJson.resultado === 'OK'){
                    muestraAlerta('success', myJson.datos);
                    mostrarExpulsiones();
                }else{
                    muestraAlerta('warning', myJson.datos);
                }
            })
            .catch(error => {
                muestraAlerta('warning', error);
            });

    }else{
        muestraAlerta('warning', 'Completa todos los campos obligatorios');
    }
    
}



//////////////////////////////////////////////////
// RECOGE LAS POSIBLES CAUSAS DE AMONESTACIONES //
//////////////////////////////////////////////////
function cargarCausas(select, ruta = 'amonestacion'){
    fetch(`./php/${ruta}/listar-causas.php`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            if(myJson.resultado === "OK"){
                for(let i in myJson.datos){
                    let option = document.createElement("option");
                        option.value = myJson.datos[i].id;
                        option.appendChild(document.createTextNode(myJson.datos[i].denominacion));
                        select.appendChild(option);
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            muestraAlerta('warning', error);
        });
}


//////////////////////////////////////////////////////////
// CREA EL DOM DE LA TABLA CON LOS DATOS DEL AMONESTADO //
//////////////////////////////////////////////////////////
function obtenerExpulsiones(tabla){
    fetch(`./php/expulsion/listar.php`)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            if(myJson.resultado === 'OK'){
                if(myJson.datos.length < 1){
                    let tr = document.createElement("tr");
                    let aviso = document.createElement("td");
                        aviso.appendChild(document.createTextNode("NO HAY NINGUNA EXPULSIÓN"));
                        aviso.colSpan = "5";
                        aviso.align = "center";
                        aviso.style.fontSize = "20px";
                        tr.appendChild(aviso);
                        tabla.appendChild(tr);
                }else{
                    for(let i in myJson.datos){
                        let tr = document.createElement("tr");
                        let profesor = document.createElement("td");
                            profesor.appendChild(document.createTextNode(myJson.datos[i].nombre_profesor + " " + myJson.datos[i].apellidos_profesor));
                            tr.appendChild(profesor);
                        let alumno = document.createElement("td");
                            alumno.appendChild(document.createTextNode(myJson.datos[i].nombre_alumno + " " + myJson.datos[i].apellidos_alumno));
                            tr.appendChild(alumno);
                        let causa = document.createElement("td");
                            causa.appendChild(document.createTextNode(myJson.datos[i].causa));
                            tr.appendChild(causa);
                        let fecha = document.createElement("td");
                            fecha.appendChild(document.createTextNode(formatoFecha(myJson.datos[i].fecha)));
                            tr.appendChild(fecha);
                        let spanEstado = document.createElement("span");
                            spanEstado.classList.add(myJson.datos[i].control_jefatura);
                        let estado = document.createElement("td");
                            spanEstado.appendChild(document.createTextNode(myJson.datos[i].control_jefatura));
                            estado.appendChild(spanEstado);
                            tr.appendChild(estado);
                        tabla.appendChild(tr);
                    }
                }
            }else{
                muestraAlerta('warning', myJson.datos);
            }
        })
        .catch(error => {
            muestraAlerta('warning', error);
        });
}


/////////////////////////////////////////
// GENERA DOM DE UNA TABLA CON UN JSON //
/////////////////////////////////////////
function crearCuerpoTabla(myData){
    let tbody = document.createElement("tbody");
    for(let i in myData){
        let tr = document.createElement("tr");
        for(let k in myData[i]){
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(myData[i][k]));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return tbody;
}
