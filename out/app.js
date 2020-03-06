import { Profesor } from './modulos/profesor'; // datos del usuario que accede a la aplicación

PROFESOR = new Profesor(null, null, null, null);
PROFESOR.__proto__.verificado = false; // al iniciar el programa decide que mostrará

window.onload = () => {
  cargarReloj();
  let nav = document.getElementsByTagName("nav")[0];
  generarBarraNavegacion(PROFESOR, nav);
  mostrarInicio();
}; // iniciar sesión


function enviarLogin(usuario, clave) {
  let datosAcceso = `?usuario=${usuario.value}&clave=${clave.value}`;
  fetch(`./php/login.php${datosAcceso}`).then(response => {
    return response.json();
  }).then(myJson => {
    if (myJson.resultado === "OK") {
      PROFESOR.verificado = true;
      PROFESOR.id = myJson.datos.id;
      PROFESOR.nombre = myJson.datos.nombre;
      PROFESOR.apellidos = myJson.datos.apellidos;
      PROFESOR.perfil = myJson.datos.perfil;
      let profesorDiv = document.getElementById("nombre-profesor");
      eliminarContenido(profesorDiv);
      profesorDiv.appendChild(document.createTextNode(`${PROFESOR.nombre} ${PROFESOR.apellidos}`));
      profesorDiv.appendChild(document.createElement("br"));
      let profesorSpan = document.createElement("span");
      profesorSpan.appendChild(document.createTextNode(PROFESOR.perfil));
      profesorSpan.style.fontSize = "12px";
      profesorDiv.appendChild(profesorSpan);
      let nav = document.getElementsByTagName("nav")[0];
      eliminarContenido(nav);
      generarBarraNavegacion(PROFESOR, nav);
      muestraAlerta('success', '¡Has iniciado sesión!');
      mostrarInicio();
    } else {
      console.log(myJson.datos);
      muestraAlerta('warning', myJson.datos);
    }
  }).catch(error => {
    muestraAlerta('warning', error);
  });
} // cerrar sesión


function salir() {
  PROFESOR.verificado = false;
  PROFESOR.id = null;
  PROFESOR.nombre = null;
  PROFESOR.apellidos = null;
  let profesorDiv = document.getElementById("nombre-profesor");
  eliminarContenido(profesorDiv);
  profesorDiv.appendChild(document.createTextNode("Invitado"));
  let nav = document.getElementsByTagName("nav")[0];
  eliminarContenido(nav);
  generarBarraNavegacion(PROFESOR, nav);
  muestraAlerta('success', '¡Has cerrado sesión!');
  mostrarInicio();
}