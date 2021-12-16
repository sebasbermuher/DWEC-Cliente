window.onload = iniciar;

function iniciar() {
  document.getElementById("aplicar").addEventListener("click", colorFondo);
  document.getElementById("aplicar").addEventListener("click", colorCabecera);
  document.getElementById("aplicar").addEventListener("click", tipoLetra);
  document
    .getElementById("aplicar")
    .addEventListener("click", alineacionCabecera);
  document.getElementById("aplicar").addEventListener("click", tamañoCabecera);
  document.getElementById("aplicar").addEventListener("click", colorParrafo);
  document
    .getElementById("aplicar")
    .addEventListener("click", tipoLetraParrafo);
  document
    .getElementById("aplicar")
    .addEventListener("click", alineacionParrafo);
  document.getElementById("aplicar").addEventListener("click", tamañoParrafo);
  // COOKIE
  document
    .getElementById("guardarCookie")
    .addEventListener("click", guardarCookie);
  document
    .getElementById("cargarCookie")
    .addEventListener("click", cargarCookie);
  document.getElementById("sesion").addEventListener("click", sesion);
  document
    .getElementById("guardarPredeterminado")
    .addEventListener("click", guardaPredeterminado);
  document
    .getElementById("cargarPredeterminados")
    .addEventListener("click", cargarPredeterminados);
}

function colorFondo() {
  let elemento = document.getElementById("selectColorFondo");
  document.body.style.backgroundColor = elemento.value;
  C_ColorFondo = elemento.value;
}

function colorCabecera() {
  let elemento = document.getElementById("selectColorCabecera");
  document.getElementById("h1Cabecera").style.color = elemento.value;
  C_ColorCabecera = elemento.value;
}

function tipoLetra() {
  let elemento = document.getElementById("selectLetra");
  document.getElementById("h1Cabecera").style.fontFamily = elemento.value;
  C_TipoLetraCabecera = elemento.value;
}

function alineacionCabecera() {
  let elemento = document.getElementById("selectAlineacion");
  document.getElementById("h1Cabecera").style.textAlign = elemento.value;
  C_AlineacionCabecera = elemento.value;
}

function tamañoCabecera() {
  let elemento = document.getElementById("selectTamaño");
  document.getElementById("h1Cabecera").style.fontSize = elemento.value;
  C_TamañoCabecera = elemento.value;
}

function colorParrafo() {
  let elemento = document.getElementById("selectColorParrafo");
  document.getElementById("parrafo").style.color = elemento.value;
  C_ColorParrafo = elemento.value;
}

function tipoLetraParrafo() {
  let elemento = document.getElementById("selectLetraParrafo");
  document.getElementById("parrafo").style.fontFamily = elemento.value;
  C_TipoLetraParrafo = elemento.value;
}

function alineacionParrafo() {
  let elemento = document.getElementById("selectAlineacionParrafo");
  document.getElementById("parrafo").style.textAlign = elemento.value;
  C_AlineacionParrafo = elemento.value;
}

function tamañoParrafo() {
  let elemento = document.getElementById("selectTamañoParrafo");
  document.getElementById("parrafo").style.fontSize = elemento.value;
  C_TamañoParrafo = elemento.value;
}

//------------------------------------------------------------------------------------------
// COOKIES

function setCookie(cname, cvalue, exdays) {
  let d = new Date(); // Se extrae la fecha actual
  //Se le suman los días indicados por parámetro
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
  document.cookie = cname + "=" + cvalue + "; " + expires; //Se crea la cookie
}

function getCookie(cname) {
  let name = cname + "="; // Crea una variable con el texto del campo y un igual
  let ca = document.cookie.split(";"); // Divide la cookie en trozos separados por ;
  for (let i = 0; i < ca.length; i++) {
    // Recorre cada trozo de la cookie
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
      // Si encuentra el campo buscado
      return c.substring(name.length, c.length); // lo devuelve
  }
  return ""; // Sino devuelve vacío
}

// Variables vacias para las cookies
let C_ColorFondo = "";
let C_ColorCabecera = "";
let C_TipoLetraCabecera = "";
let C_AlineacionCabecera = "";
let C_TamañoCabecera = "";
let C_ColorParrafo = "";
let C_TipoLetraParrafo = "";
let C_AlineacionParrafo = "";
let C_TamañoParrafo = "";

//guardar cookies
function guardarCookie() {
  setCookie("C_ColorFondo" + "=" + C_ColorFondo + "; " + 31);
  setCookie("C_ColorCabecera" + "=" + C_ColorCabecera + "; " + 31);
  setCookie("C_TipoLetraCabecera" + "=" + C_TipoLetraCabecera + "; " + 31);
  setCookie("C_AlineacionCabecera" + "=" + C_AlineacionCabecera + "; " + 31);
  setCookie("C_TamañoCabecera" + "=" + C_TamañoCabecera + "; " + 31);
  setCookie("C_ColorParrafo" + "=" + C_ColorParrafo + "; " + 31);
  setCookie("C_TipoLetraParrafo" + "=" + C_TipoLetraParrafo + "; " + 31);
  setCookie("C_AlineacionParrafo" + "=" + C_AlineacionParrafo + "; " + 31);
  setCookie("C_TamañoParrafo" + "=" + C_TamañoParrafo + "; " + 31);
}

// cargar cookies
function cargarCookie() {
  let h1Cabecera = document.getElementById("h1Cabecera");
  let parrafo = document.getElementById("parrafo");
  document.body.style.backgroundColor = getCookie("C_ColorFondo");
  h1Cabecera.style.color = getCookie("C_ColorCabecera");
  h1Cabecera.style.fontFamily = getCookie("C_TipoLetraCabecera");
  h1Cabecera.style.textAlign = getCookie("C_AlineacionCabecera");
  h1Cabecera.style.fontSize = getCookie("C_TamañoCabecera");
  parrafo.style.color = getCookie("C_ColorParrafo");
  parrafo.style.fontFamily = getCookie("C_TipoLetraParrafo");
  parrafo.style.textAlign = getCookie("C_AlineacionParrafo");
  parrafo.style.fontSize = getCookie("C_TamañoParrafo");
}

// Guardar en la zona de almacenamiento de Session
function sesion() {
  sessionStorage.setItem(
    "C_ColorFondo",
    document.getElementById("selectColorFondo").value
  );
  sessionStorage.setItem(
    "C_ColorCabecera",
    document.getElementById("selectColorCabecera").value
  );
  sessionStorage.setItem(
    "C_TipoLetraCabecera",
    document.getElementById("selectLetra").value
  );
  sessionStorage.setItem(
    "C_AlineacionCabecera",
    document.getElementById("selectAlineacion").value
  );
  sessionStorage.setItem(
    "C_TamañoCabecera",
    document.getElementById("selectTamaño").value
  );
  sessionStorage.setItem(
    "C_ColorParrafo",
    document.getElementById("selectColorParrafo").value
  );
  sessionStorage.setItem(
    "C_TipoLetraParrafo",
    document.getElementById("selectLetraParrafo").value
  );
  sessionStorage.setItem(
    "C_AlineacionParrafo",
    document.getElementById("selectAlineacionParrafo").value
  );
  sessionStorage.setItem(
    "C_TamañoParrafo",
    document.getElementById("selectTamañoParrafo").value
  );
}

// Guardar como predeterminado -- Almacenamiento local
function guardaPredeterminado() {
  localStorage.setItem(
    "C_ColorFondo",
    document.getElementById("selectColorFondo").value
  );
  localStorage.setItem(
    "C_ColorCabecera",
    document.getElementById("selectColorCabecera").value
  );
  localStorage.setItem(
    "C_TipoLetraCabecera",
    document.getElementById("selectLetra").value
  );
  localStorage.setItem(
    "C_AlineacionCabecera",
    document.getElementById("selectAlineacion").value
  );
  localStorage.setItem(
    "C_TamañoCabecera",
    document.getElementById("selectTamaño").value
  );
  localStorage.setItem(
    "C_ColorParrafo",
    document.getElementById("selectColorParrafo").value
  );
  localStorage.setItem(
    "C_TipoLetraParrafo",
    document.getElementById("selectLetraParrafo").value
  );
  localStorage.setItem(
    "C_AlineacionParrafo",
    document.getElementById("selectAlineacionParrafo").value
  );
  localStorage.setItem(
    "C_TamañoParrafo",
    document.getElementById("selectTamañoParrafo").value
  );
}

// Cargar predeterminados -- Almacenamiento local
function cargarPredeterminados() {
  let h1Cabecera = document.getElementById("h1Cabecera");
  let parrafo = document.getElementById("parrafo");
  document.body.style.backgroundColor = localStorage.getItem("C_ColorFondo");
  h1Cabecera.style.color = localStorage.getItem("C_ColorCabecera");
  h1Cabecera.style.fontFamily = localStorage.getItem("C_TipoLetraCabecera");
  h1Cabecera.style.textAlign = localStorage.getItem("C_AlineacionCabecera");
  h1Cabecera.style.fontSize = localStorage.getItem("C_TamañoCabecera");
  parrafo.style.color = localStorage.getItem("C_ColorParrafo");
  parrafo.style.fontFamily = localStorage.getItem("C_TipoLetraParrafo");
  parrafo.style.textAlign = localStorage.getItem("C_AlineacionParrafo");
  parrafo.style.fontSize = localStorage.getItem("C_TamañoParrafo");
}
