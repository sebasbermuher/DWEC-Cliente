window.onload = iniciar;
let fecha_actual = new Date();

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  document
    .getElementById("fecha_publicacion")
    .addEventListener("click", F_FechaActual);
}

function F_FechaActual() {
  let elemento = document.getElementById("fecha_publicacion");
  elemento = fecha_actual.setDate(elemento.value);
}

function titulo() {
  let elemento = document.getElementById("titulo");
  limpiarError(elemento);
  if (elemento.value === "") {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio.";
    error(elemento);
    return false;
  } else {
    correcto(elemento);
    return true;
  }
}

function fecha() {
  const regex =
    /^(\d{4})[_](\d{2})[_](\d{2})$|((\d{4})([A-Z][A-Z][A-Z])(\d{2}))$/;
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if ((elemento.value === "") | !regex.test(elemento.value)) {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio. Debe ser formato yyyy_mm_dd o yyyyNNNdd.";
    error(elemento);
    return false;
  } else {
    correcto(elemento);
    return true;
  }
}

function codigo() {
  const regex =
    /^([B][C][_][6][7])$|([F][R][_][5][6])$|([D][E][_][3][3])$|([D][F][_][7][7])$/;
  let elemento = document.getElementById("codigo");
  limpiarError(elemento);
  if ((elemento.value === "") | !regex.test(elemento.value)) {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio y debe ser un codigo válido. (BC_67 // FR_56 // DE_33 // DF_77)";
    error(elemento);
    return false;
  } else {
    correcto(elemento);
    return true;
  }
}

function referencia() {
  const regex =
    /^(([A-Z])([a-z])[-]([P|X|F|G|p|x|f|g]{2})([5-9][0-9][0-9][0-9])[g][J])$/;
  let elemento = document.getElementById("referencia");
  limpiarError(elemento);
  if ((elemento.value === "") | !regex.test(elemento.value)) {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio y debe ser una referencia válida.";
    error(elemento);
    return false;
  } else {
    correcto(elemento);
    return true;
  }
}

function contraseña() {
  const regex = /^([A-Z])[@]([A-z]{6,12})[-]([^\w|^%]{1})([2|5|1|8]{4})$/;
  let elemento = document.getElementById("contraseña");
  limpiarError(elemento);
  if ((elemento.value === "") | !regex.test(elemento.value)) {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio y la contraseña debe cumplir las reglas.";
    error(elemento);
    return false;
  } else {
    correcto(elemento);
    return true;
  }
}

// -------------------------------------------------------------------

function validar(e) {
  if (
    titulo() &&
    fecha() &&
    codigo() &&
    referencia() &&
    contraseña() &&
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

function correcto(elemento) {
  elemento.className = "correcto";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
}
