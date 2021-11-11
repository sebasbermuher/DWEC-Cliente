//DAW2 ~!@#$%^&*()+`-={}[]|\\:;/?><., ALIXAR
let mensaje = prompt("Introduce una cadena");

let mensaje2 = mensaje.replace(/[^a-zA-Z0-9-]/g, "");
//solo admite minusculas, mayusculas, numeros y guion

document.getElementById("mensaje").innerHTML = "Cadena original --> " + mensaje;
document.getElementById("mensaje_final").innerHTML =
  "Resultado --> " + mensaje2;
