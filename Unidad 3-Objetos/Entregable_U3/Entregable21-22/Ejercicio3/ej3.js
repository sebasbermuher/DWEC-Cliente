let cadena = prompt(
  "Introduzca nombre,apellido1,apellido2@provincia:domicilio:cod_postal@id_jugador"
);

let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let provincia = document.getElementById("provincia");
let domicilio = document.getElementById("domicilio");
let cp = document.getElementById("cp");
let id_jugador = document.getElementById("id_jugador");
let cobertura = document.getElementById("cobertura");
let maquina = document.getElementById("maquina");
let id = document.getElementById("id");

let array_cadena = new Array();
array_cadena = cadena.split("@");

let array_coma = array_cadena[0];
array_coma = array_coma.split(",");
nombre.innerHTML = "Nombre: " + array_coma[0];
apellidos.innerHTML = "Apellidos: " + array_coma[1] + " " + array_coma[2];

let array_subcadena = array_cadena[1];
array_subcadena = array_subcadena.split(":");
provincia.innerHTML = "Provincia: " + array_subcadena[0];
domicilio.innerHTML = "Domicilio: " + array_subcadena[1];
cp.innerHTML = "CP: " + array_subcadena[2];

id_jugador.innerHTML = "ID: " + array_cadena[2];
cobertura.innerHTML = "Cobertura: " + array_cadena[2].substring(0, 2);
maquina.innerHTML = "Maquina: " + array_cadena[2].substring(2, 6);
id.innerHTML = "id: " + array_cadena[2].substring(6, 9);
