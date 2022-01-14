//creo el formulario
let formulario = document.createElement("form");
//meto el formulario dentro del div del html
document.body.appendChild(formulario);

//creo la tabla
let elementoTable = document.createElement("table");
document.body.appendChild(elementoTable);

//creo la fila (tr)
let elementoTr = document.createElement("tr");
elementoTable.appendChild(elementoTr);

let arrayBotones = [
  { text: "Input tipo texto", funcion: funcionBotonUno },
  { text: "Input tipo password", funcion: funcionBotonDos },
  { text: "Textarea", funcion: funcionBotonTres },
  { text: "Label a input segun for", funcion: funcionBotonCuatro },
  { text: "Insertar imagen", funcion: funcionBotonCinco },
  { text: "Input tipo checkbox", funcion: funcionBotonSeis },
  { text: "Input tipo radio", funcion: funcionBotonSiete },
  { text: "Generar submit", funcion: funcionBotonOcho },
];

function crearBoton() {
  arrayBotones.forEach((atributo) => {
    let elementoBoton = document.createElement("button");
    elementoBoton.innerText = atributo.text;
    elementoBoton.onclick = atributo.funcion;
    let elementoTd = document.createElement("td");
    elementoTd.appendChild(elementoBoton);
    elementoTable.appendChild(elementoTd);
  });
}

// 1- Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el input.
function funcionBotonUno() {
  let promptUno = prompt("Introduce el atributo name del input");
  let elementoInputUno = document.createElement("input");
  elementoInputUno.setAttribute("type", "text");
  elementoInputUno.name = promptUno;
  formulario.appendChild(elementoInputUno);
}

// 2- Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el  input.
function funcionBotonDos() {
  let promptDos = prompt("Introduce el atributo name del input");
  let elementoInputDos = document.createElement("input");
  elementoInputDos.setAttribute("type", "password");
  elementoInputDos.name = promptDos;
  formulario.appendChild(elementoInputDos);
}

// 3- Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un textarea de 40 columnas y 5  filas.
function funcionBotonTres() {
  let promptTres = prompt("Introduce el atributo name del input");
  let elementoTextarea = document.createElement("textarea");
  elementoTextarea.name = promptTres;
  elementoTextarea.rows = 5;
  elementoTextarea.cols = 40;
  formulario.appendChild(elementoTextarea);
}

// 4- Crear un label. Preguntará al usuario a qué input va referido (atributo for) y el texto que aparecerá.
function funcionBotonCuatro() {
  let promptCuatro = prompt("Introduce a que input va referido (atributo for)");
  let textoLabel = prompt("Introduce el texto del label");
  let elementoLabel = document.createElement("label");
  let nodoDestino = formulario.querySelector(
    "input[name='" + promptCuatro + "']"
  );
  elementoLabel.for = promptCuatro;
  elementoLabel.innerText = textoLabel;

  //se coloca el label delante del input
  nodoDestino.parentNode.insertBefore(elementoLabel, nodoDestino);
}

// 5- Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
function funcionBotonCinco() {
  let promptCinco = prompt("Introduce la ruta de la imagen (atributo src)");
  let elementoIMG = document.createElement("img");
  elementoIMG.src = promptCinco;
  formulario.appendChild(elementoIMG);
}

// 6- Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value). Preguntará también por el texto que lo acompaña.
function funcionBotonSeis() {
  let promptSeis1 = prompt("Introduce el nombre del checkbox (atributo name)");
  let promptSeis2 = prompt("Introduce el atributo value del checkbox");
  let promptSeis3 = prompt("Introduce el texto del checkbox");
  let elementoCheckbox = document.createElement("input");
  let elementoLabel2 = document.createElement("label");
  elementoCheckbox.type = "checkbox";
  elementoCheckbox.name = promptSeis1;
  elementoCheckbox.value = promptSeis2;
  elementoLabel2.innerText = promptSeis3;
  formulario.appendChild(elementoCheckbox);
  formulario.appendChild(elementoLabel2);
}

// 7- Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value). Preguntará también por el texto que lo acompaña.
function funcionBotonSiete() {
  let promptSiete1 = prompt("Introduce el nombre del checkbox (atributo name)");
  let promptSeis2 = prompt("Introduce el atributo value del checkbox");
  let promptSeis3 = prompt("Introduce el texto del checkbox");
  let ElementoRadio = document.createElement("input");
  let ElementoLabel = document.createElement("label");
  ElementoRadio.type = "radio";
  ElementoRadio.name = promptSiete1;
  ElementoRadio.value = promptSeis2;
  ElementoLabel.innerText = promptSeis3;
  formulario.appendChild(ElementoRadio);
  formulario.appendChild(ElementoLabel);
}

// 8- Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).
function funcionBotonOcho() {
  let promptOcho1 = prompt("Introduce el atributo name del submit");
  let promptOcho2 = prompt("Introduce el atributo value del submit");
  let elementoSubmit = document.createElement("input");
  elementoSubmit.type = "submit";
  elementoSubmit.name = promptOcho1;
  elementoSubmit.value = promptOcho2;
  formulario.appendChild(elementoSubmit);
}

document.body.onload = crearBoton;
