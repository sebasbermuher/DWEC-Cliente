let cadena = prompt("Introduce una cadena de texto");
//Buenos días, me llamo Cataplasmo
let a = "4";
let e = "3";
let i = "1";
let o = "0";
let u = "|_|";
let cadena2 = "";

for (let x = 0; x < cadena.length; x++) {
  let caracter = cadena.charAt(x);

  if (caracter === "a" || caracter === "A" || caracter === "á") {
    cadena2 = cadena2 + a;
  } else if (caracter === "e" || caracter === "E" || caracter === "é") {
    cadena2 = cadena2 + e;
  } else if (caracter === "i" || caracter === "I" || caracter === "í") {
    cadena2 = cadena2 + i;
  } else if (caracter === "o" || caracter === "O" || caracter === "ó") {
    cadena2 = cadena2 + o;
  } else if (caracter === "u" || caracter === "U" || caracter === "ú") {
    cadena2 = cadena2 + u;
  } else {
    cadena2 = cadena2 + caracter;
  }
}

document.getElementById("cadena_final").innerHTML = cadena2;
