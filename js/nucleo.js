
// datos del usuario que accede a la aplicación
PROFESOR = new Profesor(null, null, null, null);
PROFESOR.__proto__.verificado = false;


// al iniciar el programa decide que mostrará
window.onload = () => {

    cargarReloj();

    generarBarraNavegacion(PROFESOR, document.getElementsByTagName("nav")[0]);
    
    mostrarInicio();

};


function enviarLogin(){
    PROFESOR.loggedIn = true;
    PROFESOR.id = 1;
    PROFESOR.nombre = "Paco";
    PROFESOR.apellidos = "Parra";
    document.body.classList.remove("out");
    document.body.classList.add("in");
    let profesorDiv = document.getElementById("profesor");
    let nombre = document.createElement("span");
        nombre.appendChild(document.createTextNode(`${PROFESOR.nombre}, ${PROFESOR.apellidos}`));
        profesorDiv.appendChild(nombre);
    muestraAlerta('success', '¡Has iniciado sesión!')
    mostrarInicio();
}
function salir(){
    PROFESOR.loggedIn = false;
    PROFESOR.id = null;
    PROFESOR.nombre = null;
    PROFESOR.apellidos = null;
    document.body.classList.remove("in");
    document.body.classList.add("out");
    eliminarContenido(document.getElementById("profesor"));
    mostrarInicio();
}


