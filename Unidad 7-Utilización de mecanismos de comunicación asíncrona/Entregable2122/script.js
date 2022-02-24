let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
window.onload = inicio;

let vehiculos;

function inicio() {
  document
    .getElementById("cargar_vehiculos")
    .addEventListener("click", cargar_vehiculos);
  document
    .getElementById("enviar")
    .addEventListener("click", insertarEmpleados);
}

function cargar_vehiculos() {
  console.log("cargar_vehiculos");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      console.log("cargar_vehiculos - response");
      vehiculos = JSON.parse(xhr.responseText);
      generar_tabla(vehiculos);
      guardar_datos(vehiculos);
    }
  };
  xhr.open("GET", "vehiculos.json");
  xhr.send();
}

function generar_tabla(vehiculos) {
  let tabla = document.createElement("table");
  tabla.innerHTML = "";
  let thead = document.createElement("thead");
  let fila = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Id";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Name";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Description";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Vehicle Class";
  fila.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Enviar";
  fila.appendChild(th);
  thead.appendChild(fila);
  tabla.appendChild(thead);
  let tbody = document.createElement("tbody");
  for (let apartados of vehiculos) {
    fila = document.createElement("tr");
    th = document.createElement("th");
    th.innerHTML = apartados.id;
    fila.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = apartados.name;
    fila.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = apartados.description;
    fila.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = apartados.vehicle_class;
    fila.appendChild(th);
    th = document.createElement("th");
    fila.appendChild(th);
    input = document.createElement("input");
    input.type = "checkbox";
    input.id = apartados.id;
    fila.appendChild(input);
    tbody.appendChild(fila);
  }
  tabla.appendChild(tbody);
  let div = document.getElementById("contenedor_resultados");

  div.appendChild(tabla);
}

function guardar_datos(vehiculos) {
  fetch("insertar_vehiculos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehiculos),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
  document.getElementById("resultados").innerHTML = "Vehiculos insertados";
}

function insertarEmpleados() {
  let vehiculos = [];

  let checkbox = document.getElementsByTagName("input");
  for (let coche of checkbox) {
    if (document.getElementById(coche.id).checked) {
      vehiculos.push(coche.id);
    }
  }

  let coche = {
    nombre: document.getElementById("nombre").value,
    direccion: document.getElementById("direccion").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
    vehiculos: vehiculos,
  };

  fetch("registrar_envio.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(coche),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      document.getElementById("resultados").innerHTML = data.resultado;

      console.log(data);
    })
    .catch((err) => console.log(err));
}
