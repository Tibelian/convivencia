
// muestra la página de inicio
function mostrarInicio(){

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

}

// muestra la página para recuperar contraseña
function mostrarClavePerdida(){
    
    let principal = document.getElementById("principal");
    eliminarContenido(principal);
    activarBoton("Clave olvidada");

}

// muestra el formulario de inicio de sesión
function mostrarAcceder(){

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
        inputEnviar.onclick = () => { enviarLogin(inputUsuario, inputClave); };
        login.appendChild(inputEnviar);


    inputUsuario.onkeyup = (e) => {
        if(e.keyCode == 13){
            inputClave.focus();
        }
    }
    inputClave.onkeyup = (e) => {
        if(e.keyCode == 13){
            inputEnviar.click();
        }
    }
    inputUsuario.focus();

}


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////// UNA VEZ QUE HA INICIADO SESIÓN //////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


//////////////////////////////////////////////
// GENERA EL DOM DEL LISTADO DE AMONESTADOS //
//////////////////////////////////////////////
function mostrarAmonestaciones(){

    let principal = document.getElementById("principal");
        principal.style.justifyContent = "center";
        eliminarContenido(principal);
        activarBoton("Amonestaciones");

    let botonNueva = document.createElement("button");
    let iconoNueva = document.createElement("i");
        iconoNueva.classList.add("fas", "fa-plus");
        botonNueva.appendChild(iconoNueva);
        botonNueva.appendChild(document.createTextNode(" Nueva Amonestación"));
        botonNueva.onclick = nuevaAmonestacion;
        botonNueva.style.margin = "20px";
        principal.appendChild(botonNueva);

    let amonestar = document.createElement("div");
        amonestar.classList.add("amonestar-listado", "shadow-out");
        principal.appendChild(amonestar);

    let tabla = document.createElement("table");
        amonestar.appendChild(tabla);
    let tr = document.createElement("tr");
        tabla.appendChild(tr);
    let profesor = document.createElement("th");
    let iconoProfesor = document.createElement("i");
        iconoProfesor.classList.add("fas", "fa-chalkboard-teacher");
        profesor.appendChild(iconoProfesor);
        profesor.appendChild(document.createTextNode(" PROFESOR"));
        tr.appendChild(profesor);
    let alumno = document.createElement("th");
    let iconoAlumno = document.createElement("i");
        iconoAlumno.classList.add("fas", "fa-user-graduate");
        alumno.appendChild(iconoAlumno);
        alumno.appendChild(document.createTextNode(" ALUMNO"));
        tr.appendChild(alumno);
    let causa = document.createElement("th");
    let iconoCausa = document.createElement("i");
        iconoCausa.classList.add("fas", "fa-clipboard-list");
        causa.appendChild(iconoCausa);
        causa.appendChild(document.createTextNode(" CAUSA"));
        tr.appendChild(causa);
    let fecha = document.createElement("th");
    let iconoFecha = document.createElement("i");
        iconoFecha.classList.add("fas", "fa-calendar");
        fecha.appendChild(iconoFecha);
        fecha.appendChild(document.createTextNode(" FECHA"));
        tr.appendChild(fecha);

    obtenerAmonestados(tabla);

}


//////////////////////////////////////////////////////////////
// GENERA EL FORMULARIO PARA AGREGAR UNA NUEVA AMONESTACIÓN //
//////////////////////////////////////////////////////////////
function nuevaAmonestacion(){

    let principal = document.getElementById("principal");
    eliminarContenido(principal);

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
        labelAsignaturas.appendChild(document.createTextNode("Asignatura:"))
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
        labelAlumnos.appendChild(document.createTextNode("Alumno:"))
        grupoAlumnos.appendChild(labelAlumnos);
    let inputAlumnos = document.createElement("select");
        grupoAlumnos.appendChild(inputAlumnos);

    inputGrupos.onchange = () => {
        if(inputGrupos.value != ""){
            obtenerAsignaturas(inputAsignaturas, inputGrupos.value);
            obtenerAlumnos(inputAlumnos, inputGrupos.value);
        }else{
            eliminarContenido(inputAlumnos);
            eliminarContenido(inputAsignaturas);
        }
    }

    let fechaObj = new Date();
    let d = fechaObj.getDate();
    let m = fechaObj.getMonth() + 1;
    let a = fechaObj.getFullYear();
    if(m < 10){
        m = `0${m}`;
    }
    if(d < 10){
        d = `0${d}`;
    }
    let fechaActual = `${a}-${m}-${d}`;
    //console.log(fechaActual);

    let grupoFecha = document.createElement("div");
        grupoFecha.classList.add("grupo");
    let labelFecha = document.createElement("label");
        labelFecha.appendChild(document.createTextNode("Fecha:"))
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
        labelCausa.appendChild(document.createTextNode("Introduce la causa:"))
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
            if(selectCausa.value === "otra"){
                    inputCausa = document.createElement("textarea");
                    inputCausa.rows = 5;
                    inputCausa.placeholder = "Escribe aquí la nueva causa";
                    grupoCausa.appendChild(inputCausa);
            }else{
                if(inputCausa){
                    inputCausa.remove();
                }
            }
        }

    let filaBotones = document.createElement("div");
        filaBotones.classList.add("fila");
        filaTitulo.appendChild(filaBotones);

    let botonVolver = document.createElement("button");
    let iconoVolver = document.createElement("i");
        iconoVolver.classList.add("fas", "fa-arrow-left");
        botonVolver.appendChild(iconoVolver);
        botonVolver.appendChild(document.createTextNode(" Vovler"));
        botonVolver.classList.add("volver");
        botonVolver.onclick = mostrarAmonestaciones;
        filaBotones.appendChild(botonVolver);

    let boton = document.createElement("button");
    let iconoGuardar = document.createElement("i");
        iconoGuardar.classList.add("fas", "fa-save");
        boton.appendChild(iconoGuardar);
        boton.appendChild(document.createTextNode(" Guardar"));
        boton.classList.add("enviar");
        boton.onclick = () => {
            let causa = 0;
            if(inputCausa){
                causa = inputCausa.value;
            }else{
                causa = selectCausa.value;
            }
            let datos = {
                grupo: inputGrupos.value, 
                alumno: inputAlumnos.value, 
                asignatura: inputAsignaturas.value, 
                causa: causa, 
                fecha: inputFecha.value
            };
            guardarAmonestacion(datos);
        };
        filaBotones.appendChild(boton);

}


//////////////////////////////////
// GENERA TABLA CON EXPULSIONES //
//////////////////////////////////
function mostrarExpulsiones(){
    
    let principal = document.getElementById("principal");
        principal.style.justifyContent = "center";
        eliminarContenido(principal);
        activarBoton("Expulsiones");

    let botonNueva = document.createElement("button");
    let iconoNueva = document.createElement("i");
        iconoNueva.classList.add("fas", "fa-plus");
        botonNueva.appendChild(iconoNueva);
        botonNueva.appendChild(document.createTextNode(" Solicitar Expulsión"));
        botonNueva.onclick = nuevaExpulsion;
        botonNueva.style.margin = "20px";
        principal.appendChild(botonNueva);

    let amonestar = document.createElement("div");
        amonestar.classList.add("amonestar-listado", "shadow-out");
        principal.appendChild(amonestar);

    let tabla = document.createElement("table");
        amonestar.appendChild(tabla);
    let tr = document.createElement("tr");
        tabla.appendChild(tr);
    let profesor = document.createElement("th");
    let iconoProfesor = document.createElement("i");
        iconoProfesor.classList.add("fas", "fa-chalkboard-teacher");
        profesor.appendChild(iconoProfesor);
        profesor.appendChild(document.createTextNode(" PROFESOR"));
        tr.appendChild(profesor);
    let alumno = document.createElement("th");
    let iconoAlumno = document.createElement("i");
        iconoAlumno.classList.add("fas", "fa-user-graduate");
        alumno.appendChild(iconoAlumno);
        alumno.appendChild(document.createTextNode(" ALUMNO"));
        tr.appendChild(alumno);
    let causa = document.createElement("th");
    let iconoCausa = document.createElement("i");
        iconoCausa.classList.add("fas", "fa-clipboard-list");
        causa.appendChild(iconoCausa);
        causa.appendChild(document.createTextNode(" CAUSA"));
        tr.appendChild(causa);
    let fecha = document.createElement("th");
    let iconoFecha = document.createElement("i");
        iconoFecha.classList.add("fas", "fa-calendar");
        fecha.appendChild(iconoFecha);
        fecha.appendChild(document.createTextNode(" FECHA"));
        tr.appendChild(fecha);
    let estado = document.createElement("th");
    let iconoEstado = document.createElement("i");
        iconoEstado.classList.add("fas", "fa-eye");
        estado.appendChild(iconoEstado);
        estado.appendChild(document.createTextNode(" ESTADO"));
        tr.appendChild(estado);

    obtenerExpulsiones(tabla);

}


///////////////////////////////////////////////////////////
// GENERA EL FORMULARIO PARA AGREGAR UNA NUEVA EXPULSIÓN //
///////////////////////////////////////////////////////////
function nuevaExpulsion(){

    let principal = document.getElementById("principal");
    eliminarContenido(principal);

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
        labelAsignaturas.appendChild(document.createTextNode("Asignatura:"))
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
        labelAlumnos.appendChild(document.createTextNode("Alumno:"))
        grupoAlumnos.appendChild(labelAlumnos);
    let inputAlumnos = document.createElement("select");
        grupoAlumnos.appendChild(inputAlumnos);

    inputGrupos.onchange = () => {
        if(inputGrupos.value != ""){
            obtenerAsignaturas(inputAsignaturas, inputGrupos.value);
            obtenerAlumnos(inputAlumnos, inputGrupos.value);
        }else{
            eliminarContenido(inputAlumnos);
            eliminarContenido(inputAsignaturas);
        }
    }

    let fechaObj = new Date();
    let d = fechaObj.getDate();
    let m = fechaObj.getMonth() + 1;
    let a = fechaObj.getFullYear();
    if(m < 10){
        m = `0${m}`;
    }
    if(d < 10){
        d = `0${d}`;
    }
    let fechaActual = `${a}-${m}-${d}`;
    //console.log(fechaActual);

    let grupoFecha = document.createElement("div");
        grupoFecha.classList.add("grupo");
    let labelFecha = document.createElement("label");
        labelFecha.appendChild(document.createTextNode("Fecha:"))
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
        labelCausa.appendChild(document.createTextNode("Introduce la causa:"))
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
            if(selectCausa.value === "otra"){
                    inputCausa = document.createElement("textarea");
                    inputCausa.rows = 5;
                    inputCausa.placeholder = "Escribe aquí la nueva causa";
                    grupoCausa.appendChild(inputCausa);
            }else{
                if(inputCausa){
                    inputCausa.remove();
                }
            }
        }

    let filaBotones = document.createElement("div");
        filaBotones.classList.add("fila");
        filaTitulo.appendChild(filaBotones);

    let botonVolver = document.createElement("button");
    let iconoVolver = document.createElement("i");
        iconoVolver.classList.add("fas", "fa-arrow-left");
        botonVolver.appendChild(iconoVolver);
        botonVolver.appendChild(document.createTextNode(" Vovler"));
        botonVolver.classList.add("volver");
        botonVolver.onclick = mostrarExpulsiones;
        filaBotones.appendChild(botonVolver);

    let boton = document.createElement("button");
    let iconoGuardar = document.createElement("i");
        iconoGuardar.classList.add("fas", "fa-save");
        boton.appendChild(iconoGuardar);
        boton.appendChild(document.createTextNode(" Guardar"));
        boton.classList.add("enviar");
        boton.onclick = () => {
            let causa = selectCausa.value;
            if(inputCausa){
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

}


function mostrarSanciones(){}
function mostrarListado(){}
