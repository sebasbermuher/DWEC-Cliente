function fun_formato() {
  let formato = document.getElementById("opciones").value; // coge el valor(select) introducido

  if (formato == 1) {
    //potencia
    let base = prompt("Introduce la base:");
    let exponente = prompt("Introduce el exponente:");
    let potencia = Math.pow(base, exponente); // operacion de potencia
    alert(base + " elevado a " + exponente + " es " + potencia);
  } else if (formato == 2) {
    //raiz cuadrada
    let num = prompt("Introduce un numero:");
    while (num < 0) {
      num = prompt(
        "ERROR, has introducido un numero negativo.Intentelo de nuevo."
      );
    }
    let raiz = Math.sqrt(num); //operacion de raiz cuadrada
    alert("La raiz cuadrada de " + num + " es " + raiz);
  } else if (formato == 3) {
    //redondeo
    let num = prompt("Introduce un numero:");

    while (num % 1 == 0) {
      num = prompt("ERROR. El numero debe de ser decimal.");
    }

    let alto = Math.ceil(num); // redondeo por lo alto -> al proximo
    let bajo = Math.floor(num); //redondeo por lo bajo

    alert(
      "El numero " +
        num +
        " rodeando por arriba es " +
        alto +
        " y rodeando por abajo es " +
        bajo
    );
  } else if (formato == 4) {
    //trigonometria
    let angulo = prompt("Introduce los grados");

    while (angulo < 0 || angulo > 360) {
      angulo = prompt(
        "ERROR. Introduce un grado entre los siguientes valores (0-360)"
      );
    }
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tangente = Math.tan(angulo);

    alert(
      "Seno: " + seno + "\n Coseno: " + coseno + "\n Tangente: " + tangente
    );
  }
}
