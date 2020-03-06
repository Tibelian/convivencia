////////////////////////////////////////////
// ELIMINA TODOS LOS HIJOS DE UN ELEMENTO //
////////////////////////////////////////////
function eliminarContenido(padre) {
  for (let i = 0; i < padre.childNodes.length; i = 0) {
    let hijo = padre.childNodes[0];
    hijo.parentNode.removeChild(hijo);
  }

  if (padre.id == "principal") {
    padre.classList.add("animate");
    setTimeout(() => {
      padre.classList.remove("animate");
    }, 2000);
  }
} ///////////////////
// RELOJ DIGITAL //
///////////////////


function cargarReloj() {
  let reloj = document.getElementById("reloj");
  eliminarContenido(reloj);
  let fecha = new Date();
  let hora = fecha.getUTCHours() + 1;
  let minuto = fecha.getUTCMinutes();
  let segundo = fecha.getUTCSeconds();

  if (hora < 10) {
    hora = `0${hora}`;
  }

  if (minuto < 10) {
    minuto = `0${minuto}`;
  }

  if (segundo < 10) {
    segundo = `0${segundo}`;
  }

  let tiempo = `${hora}:${minuto}:${segundo}`;
  reloj.appendChild(document.createTextNode(tiempo)); // cada segundo se vuelve a cargar

  setTimeout(() => {
    cargarReloj();
  }, 1000);
} ////////////////////////
// MUESTRA UNA ALERTA //
////////////////////////


function muestraAlerta(css, msg, close = true) {
  let contenedor = document.getElementById("contenedor-alertas");
  let alerta = document.createElement("div");
  alerta.classList.add("alert", css);
  alerta.appendChild(document.createTextNode(msg));

  if (close) {
    let button = document.createElement("button");
    button.classList.add("close");
    button.appendChild(document.createTextNode("X"));

    button.onclick = () => {
      alerta.parentNode.removeChild(alerta);
    };

    alerta.appendChild(button);
    setTimeout(() => {
      if (button) {
        button.click();
      }
    }, 5000);
  }

  contenedor.appendChild(alerta);
} ///////////////////////////////
// FECHA CON FORMATO EUROPEO //
///////////////////////////////


function formatoFecha(fecha) {
  let laFecha = new Date(fecha);
  let anno = laFecha.getUTCFullYear();
  let mes = laFecha.getUTCMonth() + 1;
  let dia = laFecha.getUTCDate();

  if (mes < 10) {
    mes = `0${mes}`;
  }

  if (dia < 10) {
    dia = `0${dia}`;
  }

  return `${dia}/${mes}/${anno}`;
} //
//
//


function ocultarMenu() {
  let aside = document.getElementsByTagName("aside")[0];
  aside.classList.toggle("oculto");
  let main = document.getElementById("principal");
  main.classList.toggle("w100");
}