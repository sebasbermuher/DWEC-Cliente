let info = document.getElementById("info");

//El número de párrafos de la página.
let parrafos = document.getElementsByTagName("p");

//El texto del segundo párrafo.
let parrafo2 = parrafos[1];

//El número de enlaces de la página.
let enlaces = document.getElementsByTagName("a");

//La dirección del primer enlace.
let enlace1 = enlaces[0];

//La dirección del penúltimo enlace.
let enlace2 = enlaces[enlaces.length - 2];

//El número de enlaces que apuntan a /wiki/Municipio
let numMunicipio = document.querySelectorAll(
  'a[href="/wiki/Municipio"]'
).length;

//El número de enlaces del primer párrafo.
let numEnlacesPrimerParrafo = parrafos[0].getElementsByTagName("a").length;

//---------------------------------------------------

//Mensaje en el div
info.innerHTML +=
  "<br> El número de párrafos de la página es " +
  parrafos.length +
  ".<br> <br>";
info.innerHTML +=
  "El texto del segundo párrafo es: " + parrafo2.textContent + ".<br> <br>";
info.innerHTML +=
  "El número de enlaces de la página es " + enlaces.length + ".<br> <br>";
info.innerHTML += "La dirección del primer enlace es " + enlace1 + ".<br> <br>";
info.innerHTML +=
  "La dirección del penúltimo enlace es " + enlace2 + ".<br> <br>";
info.innerHTML +=
  "El número de enlaces que apuntan a /wiki/Municipio es " +
  numMunicipio +
  ".<br> <br>";
info.innerHTML +=
  "El número de enlaces del primer párrafo es " +
  numEnlacesPrimerParrafo +
  ". <br>";
