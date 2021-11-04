let datos = prompt(
  "Introduce los datos en este formato “nombre:apellidos:telefono:email:codigopostal”"
);
let aux = datos.split(":");
let email = aux[3].split("@");

alert(
  "Codigo postal: " +
    aux[4] +
    "\n" +
    "Apellidos: " +
    aux[1] +
    "\n" +
    "Email: " +
    aux[3] +
    "\n" +
    "Servidor: " +
    email[1]
);
