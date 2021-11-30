let num = prompt("Introduce un numero");
let intentos = 1; //en 1 para que nos cuente el del primer prompt
let aleatorio = parseInt(Math.random() * (101 - 1) + 1); //aleatorio del 1 a 100

while (num != aleatorio || isNaN(num)) {
  //mientras no se igul a aleatorio o num no sea distinto a un numero
  if (isNaN(num)) {
    //si no es un numero
    alert("No es un numero, introduce otro:");
  } else if (num == null) {
    // si le damos a cancelar, por lo tanto no hay valor
    alert("Se ha cancelado el juego");
    break;
  } else if (num > aleatorio) {
    //si el numero introducido es mayor que el aleatorio
    alert("El numero aleatorio es menor. Introduce otro:");
  } else if (num < aleatorio) {
    //si el numero introducido es menor que el aleatorio
    alert("El numero aleatorio es mayor. Introduce otro:");
  }
  intentos++; //se van sumando los intentos
  num = prompt("Introduce un numero"); // se inicia otro prompt para volver a meter valor a num
}

if (num == aleatorio) {
  // cuando los dos numeros sean iguales
  alert("Has acertado. Lo has intentado " + intentos + " veces.");
}

num = confirm("Quieres volver a jugar?");
if (num == true) {
  //si acepta pues vuelve a jugar, sino se termina
  location.reload(); //se vuelve a inicializar los bucles
}
