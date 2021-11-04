let datos;
let cp = document.getElementById("cp");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let servidor = document.getElementById("servidor");

window.onload = function () {
  datos = prompt("Introduzca nombre:apellidos:telefono:email:codigopostal");
  mostrar(datos);
};

function mostrar(cadena) {
  let aux_cadena = cadena.split(":");
  cp.innerHTML = "CP= " + aux_cadena[4];
  apellidos.innerHTML = "Apellidos= " + aux_cadena[1];
  email.innerHTML = "Email= " + aux_cadena[3];
  servidor.innerHTML = "Servidor= " + aux_cadena[3].split("@")[1];
}
