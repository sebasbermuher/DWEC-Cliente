let nombre = prompt("Introduce tu nombre");
let apellido1 = prompt("Introduce tu primer apellido");
let apellido2 = prompt("Introduce tu segundo apellido");

alert(
  "Su nombre completo tiene: " +
    (nombre.length + apellido1.length + apellido2.length) +
    " letras"
);

//nombre en mayusculas
alert(
  "Nombre y apellidos en mayuscula: " +
    nombre.toUpperCase() +
    " " +
    apellido1.toUpperCase() +
    " " +
    apellido2.toUpperCase()
);

//nombre en minusculas
alert(
  "Nombre y apellidos en minuscula: " +
    nombre.toLowerCase() +
    " " +
    apellido1.toLowerCase() +
    " " +
    apellido2.toLowerCase()
);

// nombre y apellidos por separado
alert(
  "Nombre: " +
    nombre +
    "\nPrimer Apellido: " +
    apellido1 +
    "\nSegundo Apellido: " +
    apellido2
);

//propuesta para nombre de usuario
let user = nombre.substring(0, 1) + apellido1 + apellido2.substring(0, 1);

alert("Propuesta para nombre de usuario: '" + user + "'");

//segunda propuesta para nombre de usuario
let user2 =
  nombre.substring(0, 3) +
  apellido1.substring(0, 3) +
  apellido2.substring(0, 3);

alert("Propuesta para nombre de usuario: '" + user2 + "'");
