
// variable que recoge todas las rutas
let BOTONES = [];

// te devuelve los botones de un profesor según su perfil
function obtenerBotones(profesor){
    if(profesor.verificado){

        let botonAmonstacion = document.createElement("button");
            botonAmonstacion.appendChild(document.createTextNode("Amonestaciones"));
            botonAmonstacion.onclick = mostrarAmonestaciones;
        let botonExpulsion = document.createElement("button");
            botonExpulsion.appendChild(document.createTextNode("Expulsiones"));
            botonExpulsion.onclick = mostrarExpulsiones;
        let botonSancion = document.createElement("button");
            botonSancion.appendChild(document.createTextNode("Sanciones"));
            botonSancion.onclick = mostrarSanciones;
        let botonListado = document.createElement("button");
            botonListado.appendChild(document.createTextNode("Listado"));
            botonListado.onclick = mostrarListado;
        let botonSalir = document.createElement("button");
            botonSalir.appendChild(document.createTextNode("Salir"));
            botonSalir.onclick = salir;

        BOTONES.push(botonAmonstacion, botonExpulsion, botonSancion, botonListado, botonSalir);

    }else{
        
        let botonAcceder = document.createElement("button");
            botonAcceder.appendChild(document.createTextNode("Acceder"));
            botonAcceder.onclick = mostrarAcceder;
        let botonClaveOlvidada = document.createElement("button");
            botonClaveOlvidada.appendChild(document.createTextNode("Clave olvidada"));
            botonClaveOlvidada.onclick = mostrarClavePerdida;

        BOTONES.push(botonAcceder, botonClaveOlvidada);

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

// el boton "inicio" se agrega por defecto
let botonInicio = document.createElement("button");
    botonInicio.appendChild(document.createTextNode("Inicio"));
    botonInicio.onclick = mostrarInicio;
BOTONES.push(botonInicio);
