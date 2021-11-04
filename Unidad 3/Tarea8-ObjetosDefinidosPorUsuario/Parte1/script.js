function Disco() {
  this.nombre = "";
  this.cantante = "";
  this.year = "";
  this.genero = "";
  this.localizacion = 0;
  this.prestado = false;

  function Disco() {
    this.nombre = "";
    this.cantante = "";
    this.year = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;
  }

  this.incluirPropiedades = function (
    nombre,
    cantante,
    year,
    genero,
    localizacion
  ) {
    this.nombre = nombre;
    this.cantante = cantante;
    this.year = year;
    this.genero = genero;
    this.localizacion = localizacion;
  };

  this.cambiarLocalizacion = function (localizacion) {
    this.localizacion = localizacion;
  };

  this.cambiarPrestado = function () {
    if (this.prestado) {
      this.prestado = false;
    } else {
      this.prestado = true;
    }
  };

  this.mostrarInfoDisco = function () {
    let title = document.createElement("h2");
    title.textContent = "Informacion del disco";
    document.getElementById("discos").appendChild(title);
    let content = document.createElement("p");
    content.textContent =
      "nombre: " +
      this.nombre +
      "\n cantante: " +
      this.cantante +
      "\n año: " +
      this.year +
      "\n genero: " +
      this.genero +
      "\n localizacion: " +
      this.localizacion +
      "\n prestado:" +
      this.prestado;
    document.getElementById("discos").appendChild(content);
  };
}
var listadoDiscos = [];
function mostrarInfoDisco_numero_Discos() {
  document.write("El listado de los discos es: " + listadoDiscos.length);
}

function listar_Disco() {
  var opcion = prompt(
    "1 Mostrar informacion en el orden que está. \n2 Mostrar informacion ordenado \n3 Mostar informacion en orden inverso \n Introduce una opción:"
  );
  switch (opcion) {
    case "1":
      document.write("<br>" + listadoDiscos.toString());
      break;
    case "2":
      document.write("<br>" + listadoDiscos.sort());
      break;
    case "3":
      let lista_aux = [...listadoDiscos];
      document.write("<br>" + lista_aux.reverse());
      // array.reverse();
      console.log(listadoDiscos.toString());
      break;
    default:
      document.write("Error, no has seleccionado ninguna opcion.");
  }
}

function intervalo_Disco() {
  let primera_pos = prompt("Primera posicion del intervalo:");
  let ultima_pos = prompt("Ultima posicion del intervalo:");

  while (primera_pos > ultima_pos || ultima_pos > listadoDiscos.length) {
    primera_pos = prompt("Primera posicion del intervalo:");
    ultima_pos = prompt("Ultima posicion del intervalo:");
  }
  document.write(
    "Los discos entre las posiciones " +
      primera_pos +
      "-" +
      ultima_pos +
      " son:"
  );

  for (i = primera_pos; i < ultima_pos; i++) {
    document.write("<br> " + listadoDiscos[i]);
  }
}

function anadir_Disco() {
  let opcion = prompt(
    "1 Al principio. \n2 A la ultima posicion \n Introduce una opción:"
  );
  let nombre = prompt("Nombre");
  let cantante = prompt("Cantante");
  let year = prompt("Año");
  let genero;
  let toption = prompt(
    "Genero del disco,\n 1-Reggaeton\n 2-Trap\n 3-Pop\n 4-Rap"
  );
  switch (toption) {
    case "1":
      genero = "Reggaeton";
    case "2":
      genero = "Trap";
    case "3":
      genero = "Pop";
    case "4":
      genero = "Rap";
  }
  let localizacion = prompt("Localizacion");
  let disco = new Disco();
  disco.incluirPropiedades(nombre, cantante, year, genero, localizacion);

  switch (opcion) {
    case "1":
      listadoDiscos.unshift(disco);
      document.write("Disco añadido al principio:<br>");
      document.write("<br>" + listadoDiscos.toString());
      break;
    case "2":
      listadoDiscos.push(disco);
      document.write("Disco añadido al ultima_posal:<br>");
      document.write("<br>" + listadoDiscos.toString());
      break;

    default:
      document.write("No se ha seleccionado ninguna opcion");
  }
}

function borrar_Disco() {
  let opcion = prompt(
    "1 Al principio. \n2 Al ultima_posal \n Introduce una opción:"
  );
  let disco;

  switch (opcion) {
    case "1":
      disco = listadoDiscos.shift();
      document.write("Elemento borrado al principio:" + disco);
      document.write("<br>" + listadoDiscos.toString());
      break;
    case "2":
      disco = listadoDiscos.pop();
      document.write("Elemento borrado al ultima_posal:" + disco);
      document.write("<br>" + listadoDiscos.toString());
      break;

    default:
      document.write("No se ha seleccionado ninguna opción");
  }
}

function consultar_Disco() {
  let opcion = prompt(
    "1 Por posición. \n2 Por nombre \n Introduce una opción:"
  );
  let elem;

  switch (opcion) {
    case "1":
      var pos = prompt("Introduzca la posición");
      elem = listadoDiscos[pos];
      document.write("Elemento consultado:" + elem);
      break;
    case "2":
      disco = new Disco();
      var elemento = prompt(
        "Indica el elemento cuya posición vamos a mostrarInfoDisco"
      );
      for (x in listadoDiscos) {
        if (x.nombre === elemento) {
          document.write("<br> La posición es: " + indice);
          X.mostrarInfoDisco();
        }
      }
      break;
    default:
      document.write("No se ha seleccionado ninguna opción");
  }
}
