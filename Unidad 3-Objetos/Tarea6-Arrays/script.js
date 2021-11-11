let paises = [
  "España",
  "China",
  "Italia",
  "Inglaterra",
  "Mexico",
  "Francia",
  "Rusia",
];

let menu = prompt(
  "1.- Mostrar numero de paises" +
    "\n2.- Mostrar lista de paises" +
    "\n3.- Mostrar intervalo de paises" +
    "\n4.- Añadir pais" +
    "\n5.- Eliminar pais" +
    "\n6.- Consultar pais"
);

switch (menu) {
  case "1":
    numPaises();
    break;
  case "2":
    let orden = prompt(
      "Elije el orden para mostrar el array: \n1. Orden normal del array." +
        "\n2. Orden del revés.\n3. Ordenados alfabeticamente."
    );
    if (orden == "1") {
      mostrarArrayNormal();
    } else if (orden == "2") {
      mostrarArrayDelReves();
    } else {
      arrayAlfabetico();
    }
    break;
  case "3":
    let intervaloInicio = prompt("Introduzca el intervalo de inicio:");
    let intervaloFinal = prompt("Introduzca el intervalo final:");
    mostrarIntervaloPaises(intervaloInicio, intervaloFinal);
    break;
  case "4":
    let nuevoPais = prompt("Introduce el pais que quieras añadir:");
    let posicionNuevoPais = prompt(
      "¿Donde lo quieres añadir" + "\n1.-Principio." + "\n 2.-Final."
    );
    if (posicionNuevoPais == "1") {
      nuevoPaisPrincipio(nuevoPais);
    } else {
      nuevoPaisFinal(nuevoPais);
    }
    break;
  case "5":
    let eliminarPais = prompt(
      "¿Donde quieres eliminar?" + "\n1.-Principio." + "\n2.-Final."
    );
    if (eliminarPais == "1") {
      eliminarPrincipio();
    } else {
      eliminarFinal();
    }
    break;
  case "6":
    let consulta = prompt(
      "¿De que modo quieres consultar?:" +
        "\n 1.-Por posicion." +
        "\n 2.-Por nombre."
    );
    if (consulta == "1") {
      let posicion = prompt("Introduce la posicion:");
      alert(paises[posicion]);
    } else {
      let nombrePais = prompt("Introduce el nombre:");
      if (paises.indexOf(nombrePais) != -1) {
        alert(nombrePais + " está en el array.");
      } else {
        alert(nombrePais + "no está en el array.");
      }
    }
    break;
  default:
    alert("ERROR: algo salio mal");
    break;
}

//FUNCIONES
function numPaises() {
  alert("En el array hay " + paises.length + " países.");
}

function mostrarArrayNormal() {
  alert(paises);
}

function mostrarArrayDelReves() {
  let delReves = Array.from(paises); //pasamos los elementos del array a "delReves"
  delReves.reverse(); //invierte el orden
  alert(delReves);
}

function arrayAlfabetico() {
  let alfabetico = Array.from(paises); // pasamos los elementos del array a "alfabetico"
  alfabetico.sort(); //ordena alfabeticamente los elementos de array
  alert(alfabetico);
}

function mostrarIntervaloPaises(inicio, fin) {
  alert(paises.slice(inicio, fin)); //devuelve una parte del array desde las posiciones "inicio" a "fin"
}

function nuevoPaisPrincipio(paisAñadido) {
  paises.unshift(paisAñadido); //agrega un nuevo elemento al inicio del array
  alert(paises);
}

function nuevoPaisFinal(paisAñadido) {
  paises.push(paisAñadido); //agrega un nuevo elemento al final del array
  alert(paises);
}

function eliminarPrincipio() {
  let primerPais = paises[0];
  alert("Se eliminará " + primerPais);
  paises.shift(); //elimina el primer elemento del array
  alert(paises);
}

function eliminarFinal() {
  let ultimoPais = paises[paises.length - 1]; //la ultima posicion del array
  alert("Se eliminará " + ultimoPais);
  paises.pop(); //elimina el ultimo elemento del array
  alert(paises);
}
