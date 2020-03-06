//////////////////////////////////////////////////////////
// CREA EL DOM DE LA TABLA CON LOS DATOS DEL AMONESTADO //
//////////////////////////////////////////////////////////
function obtenerAmonestados(tabla) {
  fetch(`./php/amonestacion/listar.php`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado === 'OK') {
      if (myJson.datos.length < 1) {
        let tr = document.createElement("tr");
        let aviso = document.createElement("td");
        aviso.appendChild(document.createTextNode("NO HAY NINGÚN ALUMNO AMONESTADO"));
        aviso.colSpan = "4";
        aviso.align = "center";
        aviso.style.fontSize = "20px";
        tr.appendChild(aviso);
        tabla.appendChild(tr);
      } else {
        for (let i in myJson.datos) {
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
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} /////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS GRUPO DEL PROFESOR //
/////////////////////////////////////////////////////////


function obtenerGrupos(select) {
  fetch(`./php/grupo/listar.php?id_profesor=${PROFESOR.id}`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado == 'OK') {
      select.appendChild(document.createElement("option"));

      for (let i in myJson.datos) {
        let option = document.createElement("option");
        option.value = myJson.datos[i].id_grupo;
        option.appendChild(document.createTextNode(myJson.datos[i].grupo));
        select.appendChild(option);
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} ////////////////////////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LAS ASIGNATURAS DE UN PROFESOR Y UN GRUPO //
////////////////////////////////////////////////////////////////////////////


function obtenerAsignaturas(select, id_grupo) {
  fetch(`./php/asignatura/listar.php?id_profesor=${PROFESOR.id}&id_grupo=${id_grupo}`).then(response => {
    return response.json();
  }).then(myJson => {
    eliminarContenido(select);

    if (myJson.resultado == 'OK') {
      select.appendChild(document.createElement("option"));

      for (let i in myJson.datos) {
        let option = document.createElement("option");
        option.value = myJson.datos[i].id;
        option.appendChild(document.createTextNode(myJson.datos[i].denominacion));
        select.appendChild(option);
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} //////////////////////////////////////////////////////////
// CREA EL DOM DE UN SELECT CON LOS ALUMNOS DE UN GRUPO //
//////////////////////////////////////////////////////////


function obtenerAlumnos(select, id_grupo = 0) {
  fetch(`./php/alumno/listar.php?id_grupo=${id_grupo}`).then(response => {
    return response.json();
  }).then(myJson => {
    eliminarContenido(select);

    if (myJson.resultado == 'OK') {
      select.appendChild(document.createElement("option"));

      for (let i in myJson.datos) {
        let option = document.createElement("option");
        option.value = myJson.datos[i].id;
        option.appendChild(document.createTextNode(myJson.datos[i].apellidos + ", " + myJson.datos[i].nombre));
        select.appendChild(option);
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} //////////////////////////////////////////////////////////
// CREA EL DOM DE UNA TABLA CON LOS ALUMNOS DE UN GRUPO //
//////////////////////////////////////////////////////////


function obtenerAlumnosTabla(table) {
  fetch("./php/alumno/listar.php?id_grupo=0").then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado == 'OK') {
      for (let i in myJson.datos) {
        let tr = document.createElement("tr");
        let nombre = document.createElement("td");
        nombre.appendChild(document.createTextNode(myJson.datos[i].nombre + ", " + myJson.datos[i].apellidos));
        tr.appendChild(nombre);
        let familiar = document.createElement("td");
        let nombreFamiliar;

        if (myJson.datos[i].familia_nombre == null) {
          nombreFamiliar = document.createTextNode("Desconocido");
        } else {
          nombreFamiliar = document.createTextNode(myJson.datos[i].familia_nombre + ", " + myJson.datos[i].familia_apellidos);
        }

        familiar.appendChild(nombreFamiliar);
        tr.appendChild(familiar);
        let grupo = document.createElement("td");
        grupo.appendChild(document.createTextNode(myJson.datos[i].grupo));
        tr.appendChild(grupo);
        table.appendChild(tr);
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    console.log(error);
    muestraAlerta('warning', error);
  });
} /////////////////////////////////////////////////////////
// GUARDA LOS DATOS DEL AMONESTADO EN LA BASE DE DATOS //
/////////////////////////////////////////////////////////


function guardarAmonestacion(datos) {
  let ok = true;

  if (datos.grupo == "" || datos.alumno == "" || datos.asignatura == "" || datos.causa == "" || datos.fecha == "") {
    ok = false;
  }

  if (ok) {
    fetch(`./php/amonestacion/insertar.php?id_grupo=${datos.grupo}&id_alumno=${datos.alumno}&id_asignatura=${datos.asignatura}&id_profesor=${PROFESOR.id}&causa=${datos.causa}&fecha=${datos.fecha}`).then(response => {
      return response.json();
    }).then(myJson => {
      if (myJson.resultado === 'OK') {
        muestraAlerta('success', myJson.datos);
        mostrarAmonestaciones();
      } else {
        muestraAlerta('warning', myJson.datos);
      }
    }).catch(error => {
      muestraAlerta('warning', error);
    });
  } else {
    muestraAlerta('warning', 'Completa todos los campos obligatorios');
  }
} ////////////////////////////////////////////////////////
// GUARDA LOS DATOS DEL EXPULSADO EN LA BASE DE DATOS //
////////////////////////////////////////////////////////


function guardarExpulsion(datos) {
  let ok = true;

  if (datos.grupo == "" || datos.alumno == "" || datos.asignatura == "" || datos.causa == "" || datos.fecha == "") {
    ok = false;
  }

  if (ok) {
    fetch(`./php/expulsion/insertar.php?id_grupo=${datos.grupo}&id_alumno=${datos.alumno}&id_asignatura=${datos.asignatura}&id_profesor=${PROFESOR.id}&causa=${datos.causa}&fecha=${datos.fecha}`).then(response => {
      return response.json();
    }).then(myJson => {
      if (myJson.resultado === 'OK') {
        muestraAlerta('success', myJson.datos);
        mostrarExpulsiones();
      } else {
        muestraAlerta('warning', myJson.datos);
      }
    }).catch(error => {
      muestraAlerta('warning', error);
    });
  } else {
    muestraAlerta('warning', 'Completa todos los campos obligatorios');
  }
} //////////////////////////////////////////////////
// RECOGE LAS POSIBLES CAUSAS DE AMONESTACIONES //
//////////////////////////////////////////////////


function cargarCausas(select, ruta = 'amonestacion') {
  fetch(`./php/${ruta}/listar-causas.php`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado === "OK") {
      for (let i in myJson.datos) {
        let option = document.createElement("option");
        option.value = myJson.datos[i].id;
        option.appendChild(document.createTextNode(myJson.datos[i].denominacion));
        select.appendChild(option);
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} //////////////////////////////////////////////////////////
// CREA EL DOM DE LA TABLA CON LOS DATOS DEL AMONESTADO //
//////////////////////////////////////////////////////////


function obtenerExpulsiones(tabla) {
  fetch(`./php/expulsion/listar.php`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado === 'OK') {
      if (myJson.datos.length < 1) {
        let tr = document.createElement("tr");
        let aviso = document.createElement("td");
        aviso.appendChild(document.createTextNode("NO HAY NINGUNA EXPULSIÓN"));
        aviso.colSpan = "5";
        aviso.align = "center";
        aviso.style.fontSize = "20px";
        tr.appendChild(aviso);
        tabla.appendChild(tr);
      } else {
        for (let i in myJson.datos) {
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
          spanEstado.style.marginBottom = "5px";
          estado.appendChild(spanEstado);
          estado.appendChild(document.createElement("br"));

          if (myJson.datos[i].control_jefatura === "pendiente") {
            let expulsar = document.createElement("button");
            expulsar.appendChild(document.createTextNode("Expulsar"));
            expulsar.classList.add("badge");
            let amonestar = document.createElement("button");
            amonestar.appendChild(document.createTextNode("Amonestar"));
            amonestar.classList.add("badge", "volver");

            expulsar.onclick = () => {
              cambiarEstadoExpulsion(myJson.datos[i].id, "expulsar");
            };

            amonestar.onclick = () => {
              cambiarEstadoExpulsion(myJson.datos[i].id, "amonestar");
            };

            estado.appendChild(expulsar);
            estado.appendChild(document.createTextNode(" "));
            estado.appendChild(amonestar);
          }

          tr.appendChild(estado);
          tabla.appendChild(tr);
        }
      }
    } else {
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} /////////////////////////////////////////
// ACTUALIZA EL ESTADO DE LA EXPULSIÓN //
/////////////////////////////////////////


function cambiarEstadoExpulsion(id, estado) {
  fetch(`./php/expulsion/gestionar.php?id=${id}&estado=${estado}`).then(r1 => {
    return r1.json();
  }).then(js => {
    if (js.resultado === "OK") {
      muestraAlerta("success", js.datos);
    } else {
      muestraAlerta("warning", js.datos);
    }
  }).catch(err => {
    muestraAlerta("warning", err);
  });
} //////////////////////////////////////////////////////////
// DEVUELVE LAS SANCIONES DE UN ALUMNO INDICANDO SU DNI //
//////////////////////////////////////////////////////////


function obtenerSanciones(alumnoDiv, tbody, dni, nuevaSancion) {
  fetch(`./php/sancion/listar.php?dni=${dni}`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado === "OK") {
      eliminarContenido(tbody);
      eliminarContenido(alumnoDiv);

      if (myJson.datos.length === 0) {
        muestraAlerta("warning", `No existe ningún alumno con el DNI '${dni}'`);
      } else {
        let alumnoP = document.createElement("p");
        alumnoP.style.fontWeight = "bold";
        alumnoP.style.marginBottom = "10px";
        alumnoP.appendChild(document.createTextNode(myJson.datos.alumno.nombre + " " + myJson.datos.alumno.apellidos));
        alumnoDiv.appendChild(alumnoP);
        let directa = document.createElement("button");
        directa.appendChild(document.createTextNode("Añadir sanción directa"));

        directa.onclick = () => {
          eliminarContenido(nuevaSancion);
          let h3 = document.createElement("h4");
          h3.appendChild(document.createTextNode("Sanción directa"));
          nuevaSancion.appendChild(h3);
          generarNuevaSancion(myJson.datos.alumno, nuevaSancion);
        };

        alumnoDiv.appendChild(directa);

        if (myJson.datos.amonestaciones.length === 0 && myJson.datos.expulsiones.length === 0 && myJson.datos.sanciones_directas.length === 0) {
          let tr = document.createElement("tr");
          let td = document.createElement("td");
          td.style.textAlign = "center";
          td.colSpan = "6";
          td.appendChild(document.createTextNode("ESTE ALUMNO NO TIENE AMONESTACIONES, EXPULSIONES Y TAMPOCO SANCIONES"));
          tr.appendChild(td);
          tbody.appendChild(tr);
        }

        for (let i = 0; i < myJson.datos.amonestaciones.length; i++) {
          let incidencia = document.createElement("span");
          incidencia.classList.add("badge", "warning");
          incidencia.appendChild(document.createTextNode("Amonestación"));
          let sancion = myJson.datos.amonestaciones[i].sancion.denominacion;

          if (!sancion) {
            let button = document.createElement("button");
            button.classList.add("badge");
            button.appendChild(document.createTextNode("+ Añadir"));

            button.onclick = () => {
              eliminarContenido(nuevaSancion);
              let h3 = document.createElement("h4");
              h3.appendChild(document.createTextNode("Sancionar amonestación"));
              nuevaSancion.appendChild(h3);
              generarNuevaSancion(myJson.datos.alumno, nuevaSancion, myJson.datos.amonestaciones[i], "amonestacion");
            };

            sancion = button;
          }

          let data = [myJson.datos.amonestaciones[i].profesor.nombre + " " + myJson.datos.amonestaciones[i].profesor.apellidos, myJson.datos.amonestaciones[i].profesor.asignatura, incidencia, myJson.datos.amonestaciones[i].causa, formatoFecha(myJson.datos.amonestaciones[i].fecha), sancion];
          let filaAmonestacion = generaFila(data);
          tbody.appendChild(filaAmonestacion);
        }

        for (let i = 0; i < myJson.datos.expulsiones.length; i++) {
          let incidencia = document.createElement("span");
          incidencia.classList.add("badge", "danger");
          incidencia.appendChild(document.createTextNode("Expulsión"));
          let sancion = myJson.datos.expulsiones[i].sancion.denominacion;

          if (!sancion) {
            let button = document.createElement("button");
            button.classList.add("badge");
            button.appendChild(document.createTextNode("+ Añadir"));

            button.onclick = () => {
              eliminarContenido(nuevaSancion);
              let h3 = document.createElement("h4");
              h3.appendChild(document.createTextNode("Sancionar expulsión"));
              nuevaSancion.appendChild(h3);
              generarNuevaSancion(myJson.datos.alumno, nuevaSancion, myJson.datos.expulsiones[i], "expulsion");
            };

            sancion = button;
          }

          let data = [myJson.datos.expulsiones[i].profesor.nombre + " " + myJson.datos.expulsiones[i].profesor.apellidos, myJson.datos.expulsiones[i].profesor.asignatura, incidencia, myJson.datos.expulsiones[i].causa, formatoFecha(myJson.datos.expulsiones[i].fecha), sancion];
          let filaExpulsion = generaFila(data);
          tbody.appendChild(filaExpulsion);
        }

        for (let i = 0; i < myJson.datos.sanciones_directas.length; i++) {
          let incidencia = document.createElement("span");
          incidencia.classList.add("badge", "info");
          incidencia.appendChild(document.createTextNode("Directa"));
          let data = [myJson.datos.sanciones_directas[i].profesor.nombre + " " + myJson.datos.sanciones_directas[i].profesor.apellidos, myJson.datos.sanciones_directas[i].profesor.asignatura, incidencia, "---", formatoFecha(myJson.datos.sanciones_directas[i].fecha), myJson.datos.sanciones_directas[i].denominacion];
          let filaDirecta = generaFila(data);
          tbody.appendChild(filaDirecta);
        }
      }
    } else {
      muestraAlerta("warning", myJson.datos, false);
    }
  }).catch(error => {
    muestraAlerta("warning", error, false);
  });
} ///////////////////////////////////////////
// GUARDA LA SANCIÓN EN LA BASE DE DATOS //
///////////////////////////////////////////


function insertarSancion(cancelar, alumno, sancion, falta = null, tipoFalta = null) {
  let url = `./php/sancion/insertar.php?id_alumno=${alumno.id}&sancion=${sancion.sancion}&fecha=${sancion.fecha}&id_profesor=${PROFESOR.id}`;

  if (falta !== null) {
    url += `&falta=${tipoFalta}&id_falta=${falta.id}`;
  }

  fetch(url).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado == "OK") {
      muestraAlerta("success", myJson.datos);
      cancelar.click();
    } else {
      muestraAlerta("warning", myJson.datos, false);
    }
  }).catch(error => {
    muestraAlerta("warning", error, false);
  });
} /////////////////////////////////////////
// GENERA DOM DE UNA TABLA CON UN JSON //
/////////////////////////////////////////


function crearCuerpoTabla(myData) {
  let tbody = document.createElement("tbody");

  for (let i in myData) {
    let tr = generaFila(myData[i]);
    tbody.appendChild(tr);
  }

  return tbody;
}

function generaFila(data) {
  let tr = document.createElement("tr");

  for (let i in data) {
    let td = document.createElement("td");

    if (data[i] instanceof Element) {
      td.appendChild(data[i]);
    } else {
      td.appendChild(document.createTextNode(data[i]));
    }

    tr.appendChild(td);
  }

  return tr;
}