READY_STATE_COMPLETE = 4;
HTTP_STATUS_OK = 200;
window.onload = inicio;

let arrayAPOD = [];

function inicio() {
  document.getElementById("cargar_apod_xml").onclick = cargar_apod_xml;
  document.getElementById("cargar_apod_fetch").onclick = cargar_apod_fetch;
}

function cargar_apod_xml() {
  console.log("cargar_apod_xml");
  let numero = document.getElementById("numero").value;
  document.getElementById("resultados").innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      document.getElementById(
        "resultados"
      ).innerHTML += `Datos de APOD Cargados <br>`;
      console.log(data);
      arrayAPOD.push(data);
      add_select(data);
    }
  };
  xhr.open(
    "GET",
    "https://api.nasa.gov/planetary/apod?api_key=7hKwlSicXVAEGgrg86Fbr6Srz1Erfa0FhzEjDXmE&count=" +
      numero
  );
  xhr.send();
}

function cargar_apod_fetch() {
  console.log("cargar_apod_fetch");
  let numero = document.getElementById("numero").value;
  document.getElementById("resultados").innerHTML = "";
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=7hKwlSicXVAEGgrg86Fbr6Srz1Erfa0FhzEjDXmE&count=" +
      numero
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById(
        "resultados"
      ).innerHTML += `Datos de APOD Cargados <br>`;
      arrayAPOD.push(data);
      add_select(data);
    })
    .catch((err) => console.log(err));
}

// function add_select() {
//   console.log("add_select");
//   document.getElementById("apod").innerHTML = "";
//   for (apod of arrayAPOD) {
//     let select = document.getElementById("apod");
//     let option = document.createElement("option");
//     option.setAttribute("value", apod.title);
//     option.innerHTML = apod.title;
//     select.appendChild(option);
//   }
// }

function add_select() {
  document.getElementById("apod").innerHTML = "";
  let select = document.getElementById("apod");

  for (let recorre of arrayAPOD) {
    let option = document.createElement("option");
    option.setAttribute("value", recorre.title);
    option.innerHTML = recorre.title;
    select.appendChild(option);
  }
}
