
// muestra la página de inicio
function mostrarInicio(){

    let principal = document.getElementById("principal");
    eliminarContenido(principal);

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

}

// muestra el formulario de inicio de sesión
function mostrarAcceder(){

    let principal = document.getElementById("principal");
    eliminarContenido(principal);

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
        contenedorClave.appendChild(inputClave);

    let inputEnviar = document.createElement("button");
        inputEnviar.classList.add("enviar");
        inputEnviar.appendChild(document.createTextNode("Iniciar sesión"));
        inputEnviar.onclick = enviarLogin;
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

    let botonNueva = document.createElement("button");
        botonNueva.appendChild(document.createTextNode("+ Nueva Amonestación"));
        botonNueva.onclick = nuevaAmonestacion;
        botonNueva.style.margin = "20px";
        principal.appendChild(botonNueva);

    let amonestar = document.createElement("div");
        amonestar.classList.add("amonestar", "shadow-out");
        principal.appendChild(amonestar);

    let tabla = document.createElement("table");
        amonestar.appendChild(tabla);
    let tr = document.createElement("tr");
        tabla.appendChild(tr);
    let profesor = document.createElement("th");
        profesor.appendChild(document.createTextNode("PROFESOR"));
        tr.appendChild(profesor);
    let alumno = document.createElement("th");
        alumno.appendChild(document.createTextNode("ALUMNO"));
        tr.appendChild(alumno);
    let causa = document.createElement("th");
        causa.appendChild(document.createTextNode("CAUSA"));
        tr.appendChild(causa);
    let fecha = document.createElement("th");
        fecha.appendChild(document.createTextNode("FECHA"));
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

    let titulo = document.createElement("h2");
        titulo.appendChild(document.createTextNode("Nueva amonestación"));
        amonestar.appendChild(titulo);

    let grupoGrupos = document.createElement("div");
        grupoGrupos.classList.add("grupo");
        amonestar.appendChild(grupoGrupos);
    let labelGrupos = document.createElement("label");
        labelGrupos.appendChild(document.createTextNode("Seleccione el grupo:"));
        grupoGrupos.appendChild(labelGrupos);
    let inputGrupos = document.createElement("select");
        grupoGrupos.appendChild(inputGrupos);
        obtenerGrupos(inputGrupos);
    
    let grupoAsignaturas = document.createElement("div");
        grupoAsignaturas.classList.add("grupo");
        amonestar.appendChild(grupoAsignaturas);
    let labelAsignaturas = document.createElement("label");
        labelAsignaturas.appendChild(document.createTextNode("Asignatura:"))
        grupoAsignaturas.appendChild(labelAsignaturas);
    let inputAsignaturas = document.createElement("select");
        grupoAsignaturas.appendChild(inputAsignaturas);
    
    let grupoAlumnos = document.createElement("div");
        grupoAlumnos.classList.add("grupo");
        amonestar.appendChild(grupoAlumnos);
    let labelAlumnos = document.createElement("label");
        labelAlumnos.appendChild(document.createTextNode("Alumno:"))
        grupoAlumnos.appendChild(labelAlumnos);
    let inputAlumnos = document.createElement("select");
        grupoAlumnos.appendChild(inputAlumnos);

    inputGrupos.onchange = () => {
        obtenerAsignaturas(inputAsignaturas, inputGrupos.value);
        obtenerAlumnos(inputAlumnos, inputGrupos.value);
    }

    let grupoCausa = document.createElement("div");
        grupoCausa.classList.add("grupo");
        amonestar.appendChild(grupoCausa);
    let labelCausa = document.createElement("label");
        labelCausa.appendChild(document.createTextNode("Introduce la causa:"))
        grupoCausa.appendChild(labelCausa);
    let inputCausa = document.createElement("textarea");
        inputCausa.rows = 6;
        grupoCausa.appendChild(inputCausa);

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
    console.log(fechaActual);

    let grupoFecha = document.createElement("div");
        grupoFecha.classList.add("grupo");
        amonestar.appendChild(grupoFecha);
    let labelFecha = document.createElement("label");
        labelFecha.appendChild(document.createTextNode("Fecha:"))
        grupoFecha.appendChild(labelFecha);
    let inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.value = fechaActual;
        grupoFecha.appendChild(inputFecha);

    let boton = document.createElement("button");
        boton.appendChild(document.createTextNode("Guardar amonestación"));
        boton.onclick = () => {
            let datos = {
                grupo: inputGrupos.value, 
                alumno: inputAlumnos.value, 
                asignatura: inputAsignaturas.value, 
                causa: inputCausa.value, 
                fecha: inputFecha.value
            };
            guardarAmonestacion(datos);
        };
        amonestar.appendChild(boton);

    
}


