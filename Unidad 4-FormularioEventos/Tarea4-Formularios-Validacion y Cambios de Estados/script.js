window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function campo20(elemento) {
  limpiarError(elemento);
  const regex = /^[\s\S]{1,20}$/;
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert(
      "El campo " +
        document.getElementById(elemento.id).previousElementSibling.innerHTML +
        " no puede estar vacío ni tener mas de 20 caracteres"
    );
    error(elemento);
    return false;
  }
}

function validarNombre() {
  let elemento = document.getElementById("nombre");
  return campo20(elemento);
}

function validarCantante() {
  let elemento = document.getElementById("cantante");
  return campo20(elemento);
}

function validarYear() {
  let elemento = document.getElementById("year");
  limpiarError(elemento);
  const regex = /^\d{4}$/;
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("El campo año debe contener 4 caracteres numericos.");
    error(elemento);
    return false;
  }
}

function validarLocalizacion() {
  //Tambien se podria poner tipo numerico en el HTML
  let elemento = document.getElementById("localizacion");
  limpiarError(elemento);
  const regex = /^(\s*|\d+)$/;
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("El campo localización tiene que ser numérico");
    error(elemento);
    return false;
  }
}

function validar(validarFormulario) {
  if (
    validarNombre() &&
    validarCantante() &&
    validarYear() &&
    validarLocalizacion() &&
    confirm("¿Desea enviar el formulario?")
  ) {
    return true;
  } else {
    validarFormulario.preventDefault();
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.previousElementSibling.className = "etiquetaError";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
  elemento.previousElementSibling.className = "";
}
