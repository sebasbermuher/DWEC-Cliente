window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function campo20(elemento) {
  const regex = /^[\s\S]{1,20}$/;
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert(
      "El campo " +
        elemento.id +
        " no puede estar vacío ni tener mas de 20 caracteres"
    );
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
  const regex = /^\d{4}$/;
  let elemento = document.getElementById("year");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("El campo año debe contener 4 caracteres numericos.");
    return false;
  }
}

function validarLocalizacion() {
  //Tambien se podria poner tipo numerico en el HTML
  const regex = /^(\s*|\d+)$/;
  let elemento = document.getElementById("localizacion");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("El campo localización tiene que ser numérico");
    return false;
  }
}

function validar(e) {
  if (
    validarNombre() &&
    validarCantante() &&
    validarYear() &&
    validarLocalizacion() &&
    confirm("¿Desea enviar el formulario?")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}
