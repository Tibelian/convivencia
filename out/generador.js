// muestra la página de inicio
function mostrarInicio() {
  let principal = document.getElementById("principal");
  eliminarContenido(principal);
  activarBoton("Inicio");
  let titulo = document.createElement("h3");
  titulo.appendChild(document.createTextNode("Ventajas de nuestro gestor:"));
  titulo.style.padding = "40px 0 10px 40px";
  principal.appendChild(titulo);
  let lista = document.createElement("ul");
  lista.style.paddingLeft = "60px";
  principal.appendChild(lista);
  let li1 = document.createElement("li");
  li1.appendChild(document.createTextNode("Facilidad de uso e inmediatez de respuesta."));
  lista.appendChild(li1);
  let li2 = document.createElement("li");
  li2.appendChild(document.createTextNode("Ofrece ayuda instantánea a quién lo solicite."));
  lista.appendChild(li2);
  let li3 = document.createElement("li");
  li3.appendChild(document.createTextNode("Permite seguimiento de casos e investigación."));
  lista.appendChild(li3);
  let hr = document.createElement("hr");
  hr.style.margin = "20px 40px 20px 40px";
  hr.style.borderColor = "#c0c0c0";
  hr.style.borderWidth = "1px";
  hr.style.borderStyle = "solid";
  principal.appendChild(hr);
  let contenedor = document.createElement("div");
  contenedor.style.margin = "0 40px 0 40px";
  contenedor.style.paddingBottom = "20px";
  contenedor.style.display = "flex";
  contenedor.style.textAlign = "justify";
  principal.appendChild(contenedor);
  let columna1 = document.createElement("div");
  columna1.style.width = "60%";
  contenedor.appendChild(columna1);
  let columna2 = document.createElement("div");
  columna2.style.width = "40%";
  contenedor.appendChild(columna2);
  let texto1 = document.createElement("p");
  texto1.appendChild(document.createTextNode("La gestión de la convivencia de un centro escolar es un conjunto integrado de planteamientos de índole educativa, que tratan de argumentar una serie de intervenciones para prevenir y hacer frente a los problemas de disciplina que puedan tener lugar en el centro."));
  texto1.style.marginRight = "20px";
  texto1.style.marginBottom = "20px";
  columna1.appendChild(texto1);
  let texto2 = document.createElement("p");
  texto2.appendChild(document.createTextNode("El software permite compartir y maximizar el conocimiento de un alumno dado y de esta forma entender sus necesidades y anticiparse a ellas."));
  texto2.style.marginRight = "20px";
  texto2.style.marginBottom = "20px";
  columna1.appendChild(texto2);
  let texto3 = document.createElement("p");
  texto3.appendChild(document.createTextNode("Flexible, Fácil de usar y diseño a petición"));
  texto3.style.marginRight = "20px";
  texto3.style.fontSize = "20px";
  texto3.style.textAlign = "center";
  texto3.style.padding = "15px";
  texto3.style.border = "1px solid #ccc";
  texto3.style.backgroundColor = "#fff";
  columna1.appendChild(texto3);
  let imagen2 = document.createElement("img");
  imagen2.src = "./img/ies1.jpg";
  imagen2.style.width = "100%";
  imagen2.style.boxShadow = "2px 10px 10px rgba(0, 0, 0, .2)";
  columna2.appendChild(imagen2);
} // muestra la página para recuperar contraseña


function mostrarClavePerdida() {
  let principal = document.getElementById("principal");
  eliminarContenido(principal);
  activarBoton("Clave olvidada");
} // muestra el formulario de inicio de sesión


function mostrarAcceder() {
  let principal = document.getElementById("principal");
  eliminarContenido(principal);
  activarBoton("Acceder");
  let login = document.createElement("div");
  login.classList.add("login");
  principal.appendChild(login);
  let contenedorUsuario = document.createElement("div");
  contenedorUsuario.classList.add("grupo");
  login.appendChild(contenedorUsuario);
  let inputUsuario = document.createElement("input");
  inputUsuario.placeholder = "Nombre de usuario";
  inputUsuario.type = "text";
  contenedorUsuario.appendChild(inputUsuario);
  let contenedorClave = document.createElement("div");
  contenedorClave.classList.add("grupo");
  login.appendChild(contenedorClave);
  let inputClave = document.createElement("input");
  inputClave.placeholder = "Contraseña";
  inputClave.type = "password";
  inputClave.autocomplete = "off";
  contenedorClave.appendChild(inputClave);
  let inputEnviar = document.createElement("button");
  inputEnviar.classList.add("enviar");
  inputEnviar.appendChild(document.createTextNode("Iniciar sesión"));

  inputEnviar.onclick = () => {
    enviarLogin(inputUsuario, inputClave);
  };

  login.appendChild(inputEnviar);

  inputUsuario.onkeyup = e => {
    if (e.keyCode == 13) {
      inputClave.focus();
    }
  };

  inputClave.onkeyup = e => {
    if (e.keyCode == 13) {
      inputEnviar.click();
    }
  };

  inputUsuario.focus();
} ////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////// UNA VEZ QUE HA INICIADO SESIÓN //////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// GENERA EL FORMULARIO PARA AGREGAR UNA NUEVA AMONESTACIÓN //
//////////////////////////////////////////////////////////////


function mostrarAmonestaciones() {
  let principal = document.getElementById("principal");
  principal.style.justifyContent = "center";
  eliminarContenido(principal);
  activarBoton("Amonestar");
  let amonestar = document.createElement("div");
  amonestar.classList.add("amonestar", "shadow-out");
  principal.appendChild(amonestar);
  let filaTitulo = document.createElement("div");
  filaTitulo.classList.add("titulo");
  amonestar.appendChild(filaTitulo);
  let titulo = document.createElement("h2");
  let iconoNuevo = document.createElement("i");
  iconoNuevo.classList.add("fas", "fa-plus-circle");
  titulo.appendChild(iconoNuevo);
  titulo.appendChild(document.createTextNode(" Nueva amonestación"));
  filaTitulo.appendChild(titulo);
  let grupoGrupos = document.createElement("div");
  grupoGrupos.classList.add("grupo");
  let labelGrupos = document.createElement("label");
  labelGrupos.appendChild(document.createTextNode("Seleccione el grupo:"));
  grupoGrupos.appendChild(labelGrupos);
  let inputGrupos = document.createElement("select");
  grupoGrupos.appendChild(inputGrupos);
  obtenerGrupos(inputGrupos);
  let grupoAsignaturas = document.createElement("div");
  grupoAsignaturas.classList.add("grupo");
  let labelAsignaturas = document.createElement("label");
  labelAsignaturas.appendChild(document.createTextNode("Asignatura:"));
  grupoAsignaturas.appendChild(labelAsignaturas);
  let inputAsignaturas = document.createElement("select");
  grupoAsignaturas.appendChild(inputAsignaturas);
  let fila1 = document.createElement("div");
  fila1.classList.add("fila");
  fila1.appendChild(grupoGrupos);
  fila1.appendChild(grupoAsignaturas);
  amonestar.appendChild(fila1);
  let grupoAlumnos = document.createElement("div");
  grupoAlumnos.classList.add("grupo");
  let labelAlumnos = document.createElement("label");
  labelAlumnos.appendChild(document.createTextNode("Alumno:"));
  grupoAlumnos.appendChild(labelAlumnos);
  let inputAlumnos = document.createElement("select");
  grupoAlumnos.appendChild(inputAlumnos);

  inputGrupos.onchange = () => {
    if (inputGrupos.value != "") {
      obtenerAsignaturas(inputAsignaturas, inputGrupos.value);
      obtenerAlumnos(inputAlumnos, inputGrupos.value);
    } else {
      eliminarContenido(inputAlumnos);
      eliminarContenido(inputAsignaturas);
    }
  };

  let fechaObj = new Date();
  let d = fechaObj.getDate();
  let m = fechaObj.getMonth() + 1;
  let a = fechaObj.getFullYear();

  if (m < 10) {
    m = `0${m}`;
  }

  if (d < 10) {
    d = `0${d}`;
  }

  let fechaActual = `${a}-${m}-${d}`; //console.log(fechaActual);

  let grupoFecha = document.createElement("div");
  grupoFecha.classList.add("grupo");
  let labelFecha = document.createElement("label");
  labelFecha.appendChild(document.createTextNode("Fecha:"));
  grupoFecha.appendChild(labelFecha);
  let inputFecha = document.createElement("input");
  inputFecha.type = "date";
  inputFecha.value = fechaActual;
  grupoFecha.appendChild(inputFecha);
  let fila2 = document.createElement("div");
  fila2.classList.add("fila");
  fila2.appendChild(grupoAlumnos);
  fila2.appendChild(grupoFecha);
  amonestar.appendChild(fila2);
  let grupoCausa = document.createElement("div");
  grupoCausa.classList.add("grupo");
  amonestar.appendChild(grupoCausa);
  let labelCausa = document.createElement("label");
  labelCausa.appendChild(document.createTextNode("Introduce la causa:"));
  grupoCausa.appendChild(labelCausa);
  let selectCausa = document.createElement("select");
  grupoCausa.appendChild(selectCausa);
  cargarCausas(selectCausa);
  let inputCausa = document.createElement("textarea");
  let optionVacia = document.createElement("option");
  selectCausa.appendChild(optionVacia);
  let optionOtraCausa = document.createElement("option");
  optionOtraCausa.value = "otra";
  optionOtraCausa.appendChild(document.createTextNode("+ Agregar otra causa +"));
  selectCausa.appendChild(optionOtraCausa);

  selectCausa.onchange = () => {
    if (selectCausa.value === "otra") {
      inputCausa = document.createElement("textarea");
      inputCausa.rows = 5;
      inputCausa.placeholder = "Escribe aquí la nueva causa";
      grupoCausa.appendChild(inputCausa);
    } else {
      if (inputCausa) {
        inputCausa.remove();
      }
    }
  };

  let filaBotones = document.createElement("div");
  filaBotones.classList.add("fila");
  filaTitulo.appendChild(filaBotones);
  let botonVolver = document.createElement("button");
  let iconoVolver = document.createElement("i");
  iconoVolver.classList.add("fas", "fa-arrow-left");
  botonVolver.appendChild(iconoVolver);
  botonVolver.appendChild(document.createTextNode(" Vovler"));
  botonVolver.classList.add("volver");
  botonVolver.onclick = mostrarInicio;
  filaBotones.appendChild(botonVolver);
  let boton = document.createElement("button");
  let iconoGuardar = document.createElement("i");
  iconoGuardar.classList.add("fas", "fa-save");
  boton.appendChild(iconoGuardar);
  boton.appendChild(document.createTextNode(" Guardar"));
  boton.classList.add("enviar");

  boton.onclick = () => {
    let causa = 0;

    if (selectCausa.value === "otra") {
      causa = inputCausa.value;
    } else {
      causa = selectCausa.value;
    }

    let datos = {
      grupo: inputGrupos.value,
      alumno: inputAlumnos.value,
      asignatura: inputAsignaturas.value,
      causa: causa,
      fecha: inputFecha.value
    };
    console.log(datos);
    console.log(causa);
    console.log(inputCausa);
    console.log(selectCausa);
    guardarAmonestacion(datos);
  };

  filaBotones.appendChild(boton);
} ///////////////////////////////////////////////////////////
// GENERA EL FORMULARIO PARA AGREGAR UNA NUEVA EXPULSIÓN //
///////////////////////////////////////////////////////////


function mostrarExpulsiones() {
  let principal = document.getElementById("principal");
  principal.style.justifyContent = "center";
  eliminarContenido(principal);
  activarBoton("Expulsar");
  let amonestar = document.createElement("div");
  amonestar.classList.add("amonestar", "shadow-out");
  principal.appendChild(amonestar);
  let filaTitulo = document.createElement("div");
  filaTitulo.classList.add("titulo");
  amonestar.appendChild(filaTitulo);
  let titulo = document.createElement("h2");
  let iconoNuevo = document.createElement("i");
  iconoNuevo.classList.add("fas", "fa-plus-circle");
  titulo.appendChild(iconoNuevo);
  titulo.appendChild(document.createTextNode(" Solicitud de expulsión"));
  filaTitulo.appendChild(titulo);
  let grupoGrupos = document.createElement("div");
  grupoGrupos.classList.add("grupo");
  let labelGrupos = document.createElement("label");
  labelGrupos.appendChild(document.createTextNode("Seleccione el grupo:"));
  grupoGrupos.appendChild(labelGrupos);
  let inputGrupos = document.createElement("select");
  grupoGrupos.appendChild(inputGrupos);
  obtenerGrupos(inputGrupos);
  let grupoAsignaturas = document.createElement("div");
  grupoAsignaturas.classList.add("grupo");
  let labelAsignaturas = document.createElement("label");
  labelAsignaturas.appendChild(document.createTextNode("Asignatura:"));
  grupoAsignaturas.appendChild(labelAsignaturas);
  let inputAsignaturas = document.createElement("select");
  grupoAsignaturas.appendChild(inputAsignaturas);
  let fila1 = document.createElement("div");
  fila1.classList.add("fila");
  fila1.appendChild(grupoGrupos);
  fila1.appendChild(grupoAsignaturas);
  amonestar.appendChild(fila1);
  let grupoAlumnos = document.createElement("div");
  grupoAlumnos.classList.add("grupo");
  let labelAlumnos = document.createElement("label");
  labelAlumnos.appendChild(document.createTextNode("Alumno:"));
  grupoAlumnos.appendChild(labelAlumnos);
  let inputAlumnos = document.createElement("select");
  grupoAlumnos.appendChild(inputAlumnos);

  inputGrupos.onchange = () => {
    if (inputGrupos.value != "") {
      obtenerAsignaturas(inputAsignaturas, inputGrupos.value);
      obtenerAlumnos(inputAlumnos, inputGrupos.value);
    } else {
      eliminarContenido(inputAlumnos);
      eliminarContenido(inputAsignaturas);
    }
  };

  let fechaObj = new Date();
  let d = fechaObj.getDate();
  let m = fechaObj.getMonth() + 1;
  let a = fechaObj.getFullYear();

  if (m < 10) {
    m = `0${m}`;
  }

  if (d < 10) {
    d = `0${d}`;
  }

  let fechaActual = `${a}-${m}-${d}`; //console.log(fechaActual);

  let grupoFecha = document.createElement("div");
  grupoFecha.classList.add("grupo");
  let labelFecha = document.createElement("label");
  labelFecha.appendChild(document.createTextNode("Fecha:"));
  grupoFecha.appendChild(labelFecha);
  let inputFecha = document.createElement("input");
  inputFecha.type = "date";
  inputFecha.value = fechaActual;
  grupoFecha.appendChild(inputFecha);
  let fila2 = document.createElement("div");
  fila2.classList.add("fila");
  fila2.appendChild(grupoAlumnos);
  fila2.appendChild(grupoFecha);
  amonestar.appendChild(fila2);
  let grupoCausa = document.createElement("div");
  grupoCausa.classList.add("grupo");
  amonestar.appendChild(grupoCausa);
  let labelCausa = document.createElement("label");
  labelCausa.appendChild(document.createTextNode("Introduce la causa:"));
  grupoCausa.appendChild(labelCausa);
  let selectCausa = document.createElement("select");
  grupoCausa.appendChild(selectCausa);
  cargarCausas(selectCausa, 'expulsion');
  let inputCausa = document.createElement("textarea");
  let optionVacia = document.createElement("option");
  selectCausa.appendChild(optionVacia);
  let optionOtraCausa = document.createElement("option");
  optionOtraCausa.value = "otra";
  optionOtraCausa.appendChild(document.createTextNode("+ Agregar otra causa +"));
  selectCausa.appendChild(optionOtraCausa);

  selectCausa.onchange = () => {
    if (selectCausa.value === "otra") {
      inputCausa = document.createElement("textarea");
      inputCausa.rows = 5;
      inputCausa.placeholder = "Escribe aquí la nueva causa";
      grupoCausa.appendChild(inputCausa);
    } else {
      if (inputCausa) {
        inputCausa.remove();
      }
    }
  };

  let filaBotones = document.createElement("div");
  filaBotones.classList.add("fila");
  filaTitulo.appendChild(filaBotones);
  let botonVolver = document.createElement("button");
  let iconoVolver = document.createElement("i");
  iconoVolver.classList.add("fas", "fa-arrow-left");
  botonVolver.appendChild(iconoVolver);
  botonVolver.appendChild(document.createTextNode(" Vovler"));
  botonVolver.classList.add("volver");
  botonVolver.onclick = mostrarInicio;
  filaBotones.appendChild(botonVolver);
  let boton = document.createElement("button");
  let iconoGuardar = document.createElement("i");
  iconoGuardar.classList.add("fas", "fa-save");
  boton.appendChild(iconoGuardar);
  boton.appendChild(document.createTextNode(" Guardar"));
  boton.classList.add("enviar");

  boton.onclick = () => {
    let causa = selectCausa.value;

    if (inputCausa) {
      causa = inputCausa.value;
    }

    let datos = {
      grupo: inputGrupos.value,
      alumno: inputAlumnos.value,
      asignatura: inputAsignaturas.value,
      causa: causa,
      fecha: inputFecha.value
    };
    guardarExpulsion(datos);
  };

  filaBotones.appendChild(boton);
} /////////////////////////////////////
// GENERA EL DOM DE LAS SANCIONES ///
/////////////////////////////////////


function mostrarSanciones() {
  let principal = document.getElementById("principal");
  principal.style.justifyContent = "start";
  principal.style.paddingTop = "77px";
  eliminarContenido(principal);
  activarBoton("Sancionar");
  let buscador = document.createElement("div");
  buscador.style.padding = "20px";
  buscador.style.backgroundColor = "#fff";
  buscador.style.width = "77%";
  buscador.style.border = "1px solid #d9d9d9";
  buscador.style.display = "flex";
  principal.appendChild(buscador);
  let buscadorDiv = document.createElement("div");
  buscadorDiv.style.width = "50%";
  buscador.appendChild(buscadorDiv);
  let h2 = document.createElement("h2");
  h2.style.marginBottom = "5px";
  h2.appendChild(document.createTextNode("Sancionar"));
  buscadorDiv.appendChild(h2);
  let input = document.createElement("input");
  input.type = "text";
  input.style.marginRight = "10px";
  input.placeholder = "DNI alumno";
  buscadorDiv.appendChild(input);
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("BUSCAR"));
  buscadorDiv.appendChild(button);
  let alumnoDiv = document.createElement("div");
  alumnoDiv.style.textAlign = "center";
  alumnoDiv.style.width = "50%";
  buscador.appendChild(alumnoDiv);
  let table = document.createElement("table");
  table.style.width = "77%";
  table.classList.add("listado-tabla");
  principal.appendChild(table);
  let nuevaSancion = document.createElement("div");
  nuevaSancion.style.width = "77%";
  nuevaSancion.style.marginTop = "20px";
  principal.appendChild(nuevaSancion);

  button.onclick = () => {
    eliminarContenido(table);
    eliminarContenido(nuevaSancion);
    nuevaSancion.classList.remove("sancionar");
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let trHead = document.createElement("tr");
    thead.appendChild(trHead);
    let profesorTH = document.createElement("th");
    profesorTH.appendChild(document.createTextNode("Profesor"));
    trHead.appendChild(profesorTH);
    let asignaturaTH = document.createElement("th");
    asignaturaTH.appendChild(document.createTextNode("Asignatura"));
    trHead.appendChild(asignaturaTH);
    let incidenciaTH = document.createElement("th");
    incidenciaTH.appendChild(document.createTextNode("Falta"));
    trHead.appendChild(incidenciaTH);
    let causaTH = document.createElement("th");
    causaTH.appendChild(document.createTextNode("Causa"));
    trHead.appendChild(causaTH);
    let fechaTH = document.createElement("th");
    fechaTH.appendChild(document.createTextNode("Fecha"));
    trHead.appendChild(fechaTH);
    let sancionTH = document.createElement("th");
    sancionTH.appendChild(document.createTextNode("Sanción"));
    trHead.appendChild(sancionTH);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    obtenerSanciones(alumnoDiv, tbody, input.value, nuevaSancion);
  };

  input.onkeyup = event => {
    if (event.keyCode === 13) {
      button.click();
    }
  };

  input.focus();
} //
//
//


function generarNuevaSancion(alumno, contenedorNuevaSancion, falta = null, tipoFalta = null) {
  contenedorNuevaSancion.classList.add("sancionar");
  let div = document.createElement("div");
  div.style.padding = "15px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.flexDirection = "column";
  contenedorNuevaSancion.appendChild(div);

  if (falta !== null) {
    let ul = document.createElement("ul");
    ul.style.width = "90%";
    ul.style.marginBottom = "15px";
    ul.style.listStyleType = "none";
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    ul.style.justifyContent = "space-around";
    div.appendChild(ul);
    let liFecha = document.createElement("li");
    liFecha.appendChild(document.createTextNode(`Fecha: ${formatoFecha(falta.fecha)}`));
    ul.appendChild(liFecha);
    let liProfesor = document.createElement("li");
    liProfesor.appendChild(document.createTextNode(`Profesor: ${falta.profesor.nombre} ${falta.profesor.apellidos}`));
    ul.appendChild(liProfesor);
    let liCausa = document.createElement("li");
    liCausa.style.width = "100%";
    liCausa.style.textAlign = "center";
    liCausa.appendChild(document.createTextNode("Causa:"));
    liCausa.appendChild(document.createElement("br"));
    liCausa.appendChild(document.createTextNode(falta.causa));
    ul.appendChild(liCausa);
  }

  let textarea = document.createElement("textarea");
  textarea.rows = "4";
  textarea.style.width = "80%";
  textarea.placeholder = "INTROUZCA LA SANCIÓN AQUÍ...";
  div.appendChild(textarea);
  let fechaObj = new Date();
  let d = fechaObj.getDate();
  let m = fechaObj.getMonth() + 1;
  let a = fechaObj.getFullYear();

  if (m < 10) {
    m = `0${m}`;
  }

  if (d < 10) {
    d = `0${d}`;
  }

  let fecha = document.createElement("input");
  fecha.type = "date";
  fecha.placeholder = "FECHA";
  fecha.style.marginTop = "10px";
  fecha.style.width = "20%";
  fecha.value = `${a}-${m}-${d}`;
  div.appendChild(fecha);
  let botones = document.createElement("div");
  botones.style.marginTop = "15px";
  botones.style.width = "100%";
  botones.style.display = "flex";
  botones.style.justifyContent = "space-around";
  div.appendChild(botones);
  let guardar = document.createElement("button");
  guardar.appendChild(document.createTextNode("GUARDAR"));
  botones.appendChild(guardar);
  let cancelar = document.createElement("button");
  cancelar.appendChild(document.createTextNode("CANCELAR"));
  cancelar.classList.add("volver");
  botones.appendChild(cancelar);

  guardar.onclick = () => {
    insertarSancion(cancelar, alumno, {
      sancion: textarea.value,
      fecha: fecha.value
    }, falta, tipoFalta);
  };

  cancelar.onclick = () => {
    contenedorNuevaSancion.classList.remove("sancionar");
    eliminarContenido(contenedorNuevaSancion);
  };
} /////////////////////////////////////////////////////////
// GENERA UN DOM CON LOS LISTADOS DE AMON, EXPU Y ALUM //
/////////////////////////////////////////////////////////


function mostrarListado() {
  let principal = document.getElementById("principal");
  principal.style.justifyContent = "start";
  principal.style.paddingTop = "77px";
  eliminarContenido(principal);
  activarBoton("Listar");
  let ul = document.createElement("ul");
  ul.classList.add("listado");
  principal.appendChild(ul);
  let liAmonestaciones = document.createElement("li");
  ul.appendChild(liAmonestaciones);
  let buttonAmonestaciones = document.createElement("button");
  buttonAmonestaciones.appendChild(document.createTextNode("Amonestaciones"));
  liAmonestaciones.appendChild(buttonAmonestaciones);
  let liExpulsiones = document.createElement("li");
  ul.appendChild(liExpulsiones);
  let buttonExpulsiones = document.createElement("button");
  buttonExpulsiones.appendChild(document.createTextNode("Expulsiones"));
  liExpulsiones.appendChild(buttonExpulsiones);
  let liAlumnos = document.createElement("li");
  ul.appendChild(liAlumnos);
  let buttonAlumnos = document.createElement("button");
  buttonAlumnos.appendChild(document.createTextNode("Alumnos"));
  liAlumnos.appendChild(buttonAlumnos);
  let contenedorTabla = document.createElement("div");
  contenedorTabla.style.width = "77%";
  contenedorTabla.style.textAlign = "center";
  contenedorTabla.style.overflowX = "auto";
  principal.appendChild(contenedorTabla);
  let ayuda = document.createElement("p");
  ayuda.style.margin = "20px";
  ayuda.appendChild(document.createTextNode("HAGA CLICK EN EL BOTÓN PARA MOSTRAR EL LISTADO"));
  contenedorTabla.appendChild(ayuda);

  buttonAmonestaciones.onclick = () => {
    buttonAmonestaciones.style.backgroundColor = "rgb(30, 40, 44)";
    buttonAmonestaciones.disabled = true;
    buttonAlumnos.disabled = false;
    buttonAlumnos.style.backgroundColor = "";
    buttonExpulsiones.disabled = false;
    buttonExpulsiones.style.backgroundColor = "";
    eliminarContenido(contenedorTabla);
    let table = document.createElement("table");
    table.classList.add("listado-tabla");
    contenedorTabla.appendChild(table);
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    let profesor = document.createElement("th");
    profesor.appendChild(document.createTextNode("Profesor"));
    tr.appendChild(profesor);
    let alumno = document.createElement("th");
    alumno.appendChild(document.createTextNode("Alumno"));
    tr.appendChild(alumno);
    let causa = document.createElement("th");
    causa.appendChild(document.createTextNode("Causa"));
    tr.appendChild(causa);
    let fecha = document.createElement("th");
    fecha.appendChild(document.createTextNode("Fecha"));
    tr.appendChild(fecha);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    obtenerAmonestados(tbody);
  };

  buttonExpulsiones.onclick = () => {
    buttonExpulsiones.style.backgroundColor = "rgb(30, 40, 44)";
    buttonExpulsiones.disabled = true;
    buttonAlumnos.disabled = false;
    buttonAlumnos.style.backgroundColor = "";
    buttonAmonestaciones.disabled = false;
    buttonAmonestaciones.style.backgroundColor = "";
    eliminarContenido(contenedorTabla);
    let table = document.createElement("table");
    table.classList.add("listado-tabla");
    contenedorTabla.appendChild(table);
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    let profesor = document.createElement("th");
    profesor.appendChild(document.createTextNode("Profesor"));
    tr.appendChild(profesor);
    let alumno = document.createElement("th");
    alumno.appendChild(document.createTextNode("Alumno"));
    tr.appendChild(alumno);
    let causa = document.createElement("th");
    causa.appendChild(document.createTextNode("Causa"));
    tr.appendChild(causa);
    let fecha = document.createElement("th");
    fecha.appendChild(document.createTextNode("Fecha"));
    tr.appendChild(fecha);
    let estado = document.createElement("th");
    estado.appendChild(document.createTextNode("Estado"));
    tr.appendChild(estado);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    obtenerExpulsiones(tbody);
  };

  buttonAlumnos.onclick = () => {
    buttonAlumnos.style.backgroundColor = "rgb(30, 40, 44)";
    buttonAlumnos.disabled = true;
    buttonExpulsiones.disabled = false;
    buttonExpulsiones.style.backgroundColor = "";
    buttonAmonestaciones.disabled = false;
    buttonAmonestaciones.style.backgroundColor = "";
    eliminarContenido(contenedorTabla);
    let table = document.createElement("table");
    table.classList.add("listado-tabla");
    contenedorTabla.appendChild(table);
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    let nombre = document.createElement("th");
    nombre.appendChild(document.createTextNode("Nombre y apellidos"));
    tr.appendChild(nombre);
    let familiar = document.createElement("th");
    familiar.appendChild(document.createTextNode("Familiar"));
    tr.appendChild(familiar);
    let grupo = document.createElement("th");
    grupo.appendChild(document.createTextNode("Grupo"));
    tr.appendChild(grupo);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    obtenerAlumnosTabla(tbody);
  };
}