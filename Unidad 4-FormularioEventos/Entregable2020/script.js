window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function mayus(cadena) {
  return cadena.toUpperCase();
}

function nombreApellidos(elemento) {
  limpiarError(elemento);
  if (elemento.value === "") {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio.";
    error(elemento);
    return false;
  }
  return true;
}

function nombre() {
  let elemento = document.getElementById("nombre");
  //Al perder el foco, el elemento nombre se pone en mayuscula
  elemento.value = elemento.value.toUpperCase();
  return nombreApellidos(elemento);
}

function apellidos() {
  let elemento = document.getElementById("apellidos");
  //Al perder el foco, el elemento apellidos se pone en mayuscula
  elemento.value = elemento.value.toUpperCase();
  return nombreApellidos(elemento);
}

function edad() {
  let elemento = document.getElementById("edad");
  limpiarError(elemento);
  if ((elemento.value > 0 && elemento.value < 105) || elemento.value == isNaN) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "El campo edad debe ser numérico y contener un valor entre 0 y 105";
    return false;
  }
}

// Con \d{8} indicamos que debe tener 8 digitos y que finalizará con una letra
// mayusculas de la A a la Z.
// Con el signo $ indicamos el final de la expresion y que no puede haber nada fuera
// de lo declarado en la expresion.

function nif() {
  const regex = /^(\d{8}[-][A-Z])$/;
  let elemento = document.getElementById("nif");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "El formato del NIF debe ser: 12345678-A";
    return false;
  }
}

// Puede contener letras minusculas de la a-z, y que debe de estar por lo menos una vez.
// Despues debe que llevar el signo @ , seguido de letras minusculas de la a-z que por lo
// menos debe de haber una letra minuscula.
// Posteriomente debe aparecer un punto, y finalmente debe tener letras minusculas
// de la a-z por lo menos una vez.
// El simbolo + lo usamos para indicar que se pueden escribir tantas letras minuscula como quiera.

function email() {
  const regex = /^([a-z]+[@][a-z]+[.][a-z]+)$/;
  let elemento = document.getElementById("email");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El formato del email debe ser: texto@texto.texto";
    return false;
  }
}

function provincia() {
  let elemento = document.getElementById("provincia");
  limpiarError(elemento);
  if (elemento.value != 0) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error. Debes seleccionar una provincia.";
    return false;
  }
}

// En el primer grupo hay 3 opciones:
// 1) que empiece por 0 y siga con cualquier numero del 1-9
// 2) cualquier combinancion con 1 o 2 mas otro digito que vaya del 1-9
// 3) un numero que empiece por 3 y vaya acompañado de 0 o 1
//  [/|-] --> Debe de aparecer uno de esos dos signos
// En el segundo grupo hay 2 opciones
// 1) Un numero que empieza por 0 y siga con un numero del 1-9
// 2) Un numero que empieza por 1 y que siga de 0, 1 o 2
//  [/|-] --> Debe de aparecer uno de esos dos signos
// En el ultimo grupo (año): debe de haber un numero que sea 1 o 2, acompañado de
// 3 digitos mas que sean del 0 al 9.

function fecha() {
  const regex =
    /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$|(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|[1][0-2])[-]([1-2][0-9][0-9][0-9])$/;
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! Fecha en formato incorrecto. El formato debe ser: 00/00/0000";
    return false;
  }
}

// Con \d indicamos que tiene que ser un digito y con {9} indicamos la cantidad
// Por lo tanto debe de haber 9 digitos.

function telefono() {
  const regex = /^(\d{9})$/;
  let elemento = document.getElementById("telefono");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El teléfono tiene un formato incorrecto. El formato debe ser: 000000000";
    return false;
  }
}

// Para la parte de la hora hay 2 opciones.
// 1) Puede haber un numero del 0 al 1 acompañado de cualquier digito que vaya del 0 al 9
// 2) Puede haber una hora que empiece por 2 y vaya acompañado de un digito del 0 al 3.
// Con [:] separamos la hora de los minutos
// Para la parte de los minutos:
// Puede haber un digito que va del 0 al 5 y puede ir acompañado de un digito del 0 al 9

function hora() {
  const regex = /^((([0-1]\d)|(2[0-3]))[:][0-5]\d)$/;
  let elemento = document.getElementById("hora");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "El formato de la hora debe ser 00:00.";
    return false;
  }
}

function validar(e) {
  if (
    nombre() &&
    apellidos() &&
    edad() &&
    nif() &&
    email() &&
    provincia() &&
    fecha() &&
    telefono() &&
    hora() &&
    confirm("¿Desea enviar el formulario?")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
}
