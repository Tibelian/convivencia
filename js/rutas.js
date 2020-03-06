
// variable que recoge todas las rutas
let BOTONES;

// te devuelve los botones de un profesor según su perfil
function obtenerBotones(profesor){
    BOTONES = [];
    let botonInicio = document.createElement("button");
    let iconoInicio = document.createElement("i");
        iconoInicio.classList.add("fas", "fa-home");
        botonInicio.appendChild(iconoInicio);
        botonInicio.appendChild(document.createTextNode("Inicio"));
        botonInicio.onclick = mostrarInicio;
    BOTONES.push(botonInicio); // el boton "inicio" se agrega por defecto
    if(profesor.verificado){

        let botonAmonstacion = document.createElement("button");
        let iconoAmonestacion = document.createElement("i");
            iconoAmonestacion.classList.add("fas", "fa-file-archive");
            botonAmonstacion.appendChild(iconoAmonestacion);
            botonAmonstacion.appendChild(document.createTextNode("Amonestar"));
            botonAmonstacion.onclick = mostrarAmonestaciones;
        let botonExpulsion = document.createElement("button");
        let iconoExpulsion = document.createElement("i");
            iconoExpulsion.classList.add("fas", "fa-times-circle");
            botonExpulsion.appendChild(iconoExpulsion);
            botonExpulsion.appendChild(document.createTextNode("Expulsar"));
            botonExpulsion.onclick = mostrarExpulsiones;
        let botonSancion = document.createElement("button");
        let iconoSancion = document.createElement("i");
            iconoSancion.classList.add("fas", "fa-ban");
            botonSancion.appendChild(iconoSancion);
            botonSancion.appendChild(document.createTextNode("Sancionar"));
            botonSancion.onclick = mostrarSanciones;
        let botonListado = document.createElement("button");
        let iconoListado = document.createElement("i");
            iconoListado.classList.add("fas", "fa-file-alt");
            botonListado.appendChild(iconoListado);
            botonListado.appendChild(document.createTextNode("Listar"));
            botonListado.onclick = mostrarListado;
        let botonSalir = document.createElement("button");
        let iconoSalir = document.createElement("i");
            iconoSalir.classList.add("fas", "fa-sign-out-alt");
            botonSalir.appendChild(iconoSalir);
            botonSalir.appendChild(document.createTextNode("Salir"));
            botonSalir.onclick = salir;

        if(profesor.perfil === "JefeDeEstudios"){
            BOTONES.push(botonAmonstacion, botonExpulsion, botonSancion, botonListado, botonSalir);
        }else{
            BOTONES.push(botonAmonstacion, botonExpulsion, botonSalir);
        }


    }else{
        
        let botonAcceder = document.createElement("button");
        let iconoAcceder = document.createElement("i");
            iconoAcceder.classList.add("fas", "fa-sign-in-alt");
            botonAcceder.appendChild(iconoAcceder);
            botonAcceder.appendChild(document.createTextNode("Acceder"));
            botonAcceder.onclick = mostrarAcceder;
        /*
        let botonClaveOlvidada = document.createElement("button");
        let iconoClave = document.createElement("i");
            iconoClave.classList.add("fas", "fa-key");
            botonClaveOlvidada.appendChild(iconoClave);
            botonClaveOlvidada.appendChild(document.createTextNode("Clave olvidada"));
            botonClaveOlvidada.onclick = mostrarClavePerdida;
        */

        BOTONES.push(botonAcceder);

    }
}

// te genera la barra de navegación con los botones que tiene el profesor actual
function generarBarraNavegacion(profesor, padreNav){
    obtenerBotones(profesor);
    let ul = document.createElement("ul");
    for(let i = 0; i < BOTONES.length; i++){
        let li = document.createElement("li");
            li.appendChild(BOTONES[i]);
        ul.appendChild(li);
    }
    padreNav.appendChild(ul);
}


// agrega .active al botón que tiene ese texto
function activarBoton(texto){
    for(let i = 0; i < BOTONES.length; i++){
        if(BOTONES[i].textContent == texto){
            BOTONES[i].classList.add("active");
        }else if(BOTONES[i].classList.contains("active")){
            BOTONES[i].classList.remove("active");
        }
    }
}
