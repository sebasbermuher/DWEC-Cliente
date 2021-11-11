let mes = prompt("Introduce el numero de mes de tu cumpleaños (1-12):");

mes = mes - 1; // en Date el primer mes es el 0

let dia = prompt("Introduce el dia de tu nacimiento:");

let fecha = new Date();

// introducimos los valores anteriores
fecha.setMonth(mes);
fecha.setDate(dia);

let contador = 0,
  year = 2021;

while (fecha.getFullYear() != 2100) {
  if (fecha.getDay() == 0) {
    // el dia 0 es domingo
    // si es domingo se suma al contador
    contador++; //
  }
  year++; // comprueba el siguiente año
  fecha.setFullYear(year); // se añade el año a la fecha
}
alert("Tu cumpleaño caerá en domingo " + contador + " veces.");
