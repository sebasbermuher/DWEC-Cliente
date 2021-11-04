let letras = "abcdefghijklmnñopqrstuvwxyz";
let letrasMayus = letras.toUpperCase();
let numeros = "1234567890";
let caract_especiales = "-_@#$%&";

let password = prompt("Introduce una contraseña");

let longitud = false;
let mayus = false;
let minus = false;
let num = false;
let especial = false;

//comprobamos si incluyen los caracteres
function mayuscula(comprobar) {
  return letrasMayus.includes(comprobar);
}

function minuscula(comprobar) {
  return letras.includes(comprobar);
}

function numero(comprobar) {
  return numeros.includes(comprobar);
}

function especiales(comprobar) {
  return caract_especiales.includes(comprobar);
}

//comprobamos la longitud
if (password.length >= 8 && password.length <= 16) {
  longitud = true;
}

//con un bucle for miramos caracter a caracter de que tipo es
//si tiene al menos uno lo pasamos a true
for (let i = 0; i < password.length; i++) {
  let letra = password.charAt(i);

  if (mayuscula(letra)) {
    mayus = true;
  }

  if (minuscula(letra)) {
    minus = true;
  }

  if (numero(letra)) {
    num = true;
  }

  if (especiales(letra)) {
    especial = true;
  }
}

//comprobamos todo lo anterior y decimos al usuario si es segura o no
if (longitud && mayus && minus && especial && num) {
  alert("La contraseña introducida es segura.");
} else {
  alert("La contraseña introducida no es segura.");
}
