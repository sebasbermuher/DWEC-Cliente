let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
window.onload = inicio;

let personajes = [];

function inicio() {
  document
    .getElementById("carga_datos_xml")
    .addEventListener("click", cargarXML);
}

function cargarXML() {
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_respuesta(data);
    }
  };
  for (min; min <= max; min++) {
    xhr.open("GET", "https://rickandmortyapi.com/api/character/" + min, false);
    xhr.send();
  }
  mostrar_listado();
  select_personaje();
}

function procesar_respuesta(data) {
  personajes.push(data);
}

function select_personaje() {
  document.getElementById("personaje").innerHTML = "";
  let select_personaje = document.getElementById("personaje");

  for (let personaje of personajes) {
    let option = document.createElement("option");
    option.setAttribute("value", personaje.id);
    option.appendChild(document.createTextNode(personaje.name));
    select_personaje.appendChild(option);
  }
}

function mostrar_listado() {
  let html = document.getElementById("mostrar_contenido");
  for (let personaje of personajes) {
    let elementoIMG = document.createElement("elementoIMG");
    elementoIMG.src = personaje.image;
    html.appendChild(elementoIMG);

    let elementoP = document.createElement("p");
    elementoP.appendChild(document.createTextNode(personaje.species));
    html.appendChild(elementoP);

    let elementoP2 = document.createElement("p");
    elementoP2.appendChild(document.createTextNode(personaje.name));
    html.appendChild(elementoP2);

    let elementoP3 = document.createElement("p");
    elementoP3.appendChild(document.createTextNode(personaje.created));
    html.appendChild(elementoP3);

    let hr = document.createElement("hr");
    html.appendChild(hr);
  }
}
