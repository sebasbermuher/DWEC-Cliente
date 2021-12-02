window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function titulo() {
  let elemento = document.getElementById("titulo");
  limpiarError(elemento);
  if (elemento.value === "") {
    document.getElementById("errores").innerHTML =
      "El campo no puede estar vacio.";
    error(elemento);
    return false;
  }
  correcto(elemento);
  return true;
}

function descripcion() {
  let elemento = document.getElementById("descripcion");
  limpiarError(elemento);
  if (elemento.value.length >= 50 && elemento.value.length <= 400) {
    correcto(elemento);
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML = "Caracteres entre 50 y 400";
    return false;
  }
}

function contenido() {
  let elemento = document.getElementById("contenido");
  limpiarError(elemento);
  if (elemento.checked) {
    document.getElementById("etiquetas").disabled = false;
  } else {
    error(elemento);
    document.getElementById("etiquetas").disabled = true;
  }
}

function etiquetas() {
  const regex = /^((\w{3,100})|(\w{3,100},)+(\w{3,100}))$/;
  let elemento = document.getElementById("etiquetas");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    correcto(elemento);
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error en el formato de etiquetas.";
    return false;
  }
}

function password() {
  const regex =
    /^([0-9]{3})[€]([A-z]{4,14})([2-6]{2})([\W]{1})([A-Z]{1})([a-z]{1})([A-Z]{1})$/;
  let elemento = document.getElementById("password");
  limpiarError(elemento);
  if (regex.test(elemento.value)) {
    correcto(elemento);
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
    titulo() &&
    descripcion() &&
    password() &&
    contenido &&
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
