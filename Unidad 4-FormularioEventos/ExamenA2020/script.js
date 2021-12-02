window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function nombreModelo() {
  let elemento = document.getElementById("nombreModelo");
  limpiarError(elemento);
  if (elemento.value != "") {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio.";
    return false;
  }
}

function tipoModelo() {
  let elemento = document.getElementById("tipoModelo");
  limpiarError(elemento);
  if (elemento.value != 0) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Debes seleccionar un tipo de modelo.";
    return false;
  }
}

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
      "El formato fecha debe ser dd/mm/aaaa o dd-mm-aaaa.";
    return false;
  }
}

function consumo() {
  //const regexCons = /^((([A])([+++]))+|^(([A])([++]))+|^(([A])([+]))+|^(([A]))+|^(([B]))+|^(([C]))+|^(([D])))$/
  let elemento = document.getElementById("consumo");
  limpiarError(elemento);
  if (
    elemento.value === "A+++" ||
    elemento.value === "A++" ||
    elemento.value === "A+" ||
    elemento.value === "A" ||
    elemento.value === "B" ||
    elemento.value === "C" ||
    elemento.value === "D"
  ) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Erro en el formato. (A+++,A++,A+,A,B,C,D)";
    return false;
  }
}

function referencia() {
  const regex =
    /^([A-Z]{2})([0-9][0-9])([F])([3-9][0-9]{2}|[0-7][0-9]{3}|[8][0]{3})([A][F])([XYZ])([A-z])$/;
  let elemento = document.getElementById("referencia");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error en el formato de la referencia.";
    return false;
  }
}

function password() {
  const regex = /^[#]([a-z]{2})([A-z]{8,16})([\W\S])([379]{3})$/;
  let elemento = document.getElementById("password");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error en el formato de password.";
    return false;
  }
}

function validar(e) {
  if (
    nombreModelo() &&
    tipoModelo() &&
    fecha() &&
    consumo() &&
    referencia() &&
    password() &&
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
