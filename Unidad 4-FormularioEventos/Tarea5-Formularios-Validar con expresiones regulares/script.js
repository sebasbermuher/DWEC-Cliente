window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarFecha() {
  const regex =
    /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$/;
  let elemento = document.getElementById("fechaCreacion");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("La fecha debe tener formato dd/mm/aaaa");
    return false;
  }
}

function cocinero() {
  const regex = /^([a-zA-Z]{2}\W{1}\d{4})$/;
  let elemento = document.getElementById("cocinero");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("El nombre debe estar formado por 2 letras, 1 simbolo y 4 digitos.");
    return false;
  }
}

function destinatario() {
  const regex = /^([A-Z]{2,3}[_]{1}[a-z]+[:]\d{4})$/;
  let elemento = document.getElementById("destinatario");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("Error. El destinatario no está bien formado.");
    return false;
  }
}

function gramos() {
  const regex = /^([1-9]{1}[0-9]{2}|[1-4]{1}[0-9]{3}|5000)$/;
  let elemento = document.getElementById("gramos");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("Error. Gramos entre 100 y 5000.");
    return false;
  }
}

function composicion() {
  const regex = /^(\d+[g]([A-Z]{1,2}\d{0,1}){2})$/;
  let elemento = document.getElementById("composicion");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("Error. La composicion no está bien formada.");
    return false;
  }
}

function cuenta() {
  const regex = /^([A-Z]{2}\d{2}[-]\d{12}[-]\d{2})$/;
  let elemento = document.getElementById("numCuenta");
  if (regex.test(elemento.value)) {
    return true;
  } else {
    alert("Error en el formato del numero de cuenta.");
    return false;
  }
}

function validar(e) {
  if (
    validarFecha() &&
    cocinero() &&
    destinatario() &&
    gramos() &&
    composicion() &&
    cuenta() &&
    confirm("¿Desea enviar el formulario?")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}
