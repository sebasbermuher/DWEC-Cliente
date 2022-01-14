//1 - etiqueta form
let elementForm = document.createElement("form");
elementForm.id = "formulario";
// lo inserto dentro del body.
document.body.appendChild(elementForm);

//2 - elemento fieldset
let elementoFieldset = document.createElement("fieldset");
elementoFieldset.id = "fieldsetId";
document.body.children[0].appendChild(elementoFieldset);

//3 -  elemento legend
let elementoLegend = document.createElement("legend");
elementoLegend.id = "legendId";
elementoLegend.innerHTML = "Datos de Disco";
// lo inserto dentro del fieldset mediante su id antes creada "fieldsetId"
document.getElementById("fieldsetId").appendChild(elementoLegend);

//4 - elemento table
let elementoTable = document.createElement("table");
elementoTable.id = "tableId";
document.getElementById("fieldsetId").appendChild(elementoTable);

//5 - primer tr
let primerTr = document.createElement("tr");
primerTr.id = "primerTrId";
document.getElementById("tableId").appendChild(primerTr);

//6 - TD
let primerTd = document.createElement("td");
primerTd.id = "primerTdId";
primerTd.innerHTML = "Nombre del Disco";
document.getElementById("primerTrId").appendChild(primerTd);

//7 - TD
let segundoTd = document.createElement("td");
segundoTd.id = "segundoTdId";
document.getElementById("primerTrId").appendChild(segundoTd);

let inputUno = document.createElement("input");
inputUno.id = "inputUnoId";
inputUno.setAttribute("type", "text");
inputUno.setAttribute("name", "nombreDisco");
document.getElementById("segundoTdId").appendChild(inputUno);

//8 - segundo tr
let segundotr = document.createElement("tr");
segundotr.id = "segundoTrId";
document.getElementById("tableId").appendChild(segundotr);

//9 - TD
let tercerTd = document.createElement("td");
tercerTd.id = "tercerTdId";
tercerTd.innerHTML = "Grupo/Cantante";
document.getElementById("segundoTrId").appendChild(tercerTd);

//10 - TD
let cuartoTd = document.createElement("td");
cuartoTd.id = "cuartoTdId";
document.getElementById("segundoTrId").appendChild(cuartoTd);

let inputDos = document.createElement("input");
inputDos.id = "inputDosId";
inputDos.setAttribute("type", "text");
inputDos.setAttribute("name", "cantantes");
document.getElementById("cuartoTdId").appendChild(inputDos);

//11 - tercer tr
let tercerTr = document.createElement("tr");
tercerTr.id = "tercerTrId";
document.getElementById("tableId").appendChild(tercerTr);

//12 - TD
let quintoTd = document.createElement("td");
quintoTd.id = "quintoTdId";
quintoTd.innerHTML = "Año de publicacion";
document.getElementById("tercerTrId").appendChild(quintoTd);

//13 - TD
let sextoTd = document.createElement("td");
sextoTd.id = "sextoTdId";
document.getElementById("tercerTrId").appendChild(sextoTd);

let inputTres = document.createElement("input");
inputTres.id = "inputTresId";
inputTres.setAttribute("type", "number");
inputTres.setAttribute("name", "year");
document.getElementById("sextoTdId").appendChild(inputTres);

//14 - cuarto tr
let cuartoTr = document.createElement("tr");
cuartoTr.id = "cuartoTrId";
document.getElementById("tableId").appendChild(cuartoTr);

//15 - TD
let septimoTd = document.createElement("td");
septimoTd.id = "septimoTdId";
septimoTd.innerHTML = "Tipo de música";
document.getElementById("cuartoTrId").appendChild(septimoTd);

//16 - TD
let octavoTd = document.createElement("td");
octavoTd.id = "octavoTdId";
document.getElementById("cuartoTrId").appendChild(octavoTd);

let select = document.createElement("select");
select.id = "selectId";
select.setAttribute("name", "comida");
document.getElementById("octavoTdId").appendChild(select);

let option1 = document.createElement("option");
option1.innerHTML = "Rock";
document.getElementById("selectId").appendChild(option1);

let option2 = document.createElement("option");
option2.innerHTML = "Pop";
document.getElementById("selectId").appendChild(option2);

let option3 = document.createElement("option");
option3.innerHTML = "Punk";
document.getElementById("selectId").appendChild(option3);

let option4 = document.createElement("option");
option4.innerHTML = "Indie";
document.getElementById("selectId").appendChild(option4);

//17 - quinto tr
let quintoTr = document.createElement("tr");
quintoTr.id = "quintoTrId";
document.getElementById("tableId").appendChild(quintoTr);

//18 - TD
let novenoTd = document.createElement("td");
novenoTd.id = "novenoTdId";
novenoTd.innerHTML = "Localización";
document.getElementById("quintoTrId").appendChild(novenoTd);

//18 - TD
let decimoTd = document.createElement("td");
decimoTd.id = "decimoTdId";
document.getElementById("quintoTrId").appendChild(decimoTd);

let inputCuatro = document.createElement("input");
inputCuatro.id = "inputCuatroId";
inputCuatro.setAttribute("type", "number");
inputCuatro.setAttribute("min", "0");
inputCuatro.setAttribute("name", "localizacion");
document.getElementById("decimoTdId").appendChild(inputCuatro);

//19 - sexto tr
let sextoTr = document.createElement("tr");
sextoTr.id = "sextoTrId";
document.getElementById("tableId").appendChild(sextoTr);

//20 - TD
let onceTd = document.createElement("td");
onceTd.id = "onceTdId";
onceTd.innerHTML = "Prestado";
document.getElementById("sextoTrId").appendChild(onceTd);

//21 - TD
let doceTd = document.createElement("td");
doceTd.id = "doceTdId";
document.getElementById("sextoTrId").appendChild(doceTd);

let inputCinco = document.createElement("input");
inputCinco.id = "inputCincoId";
inputCinco.setAttribute("name", "prestado");
inputCinco.setAttribute("type", "radio");
inputCinco.setAttribute("value", "prestado");
document.getElementById("doceTdId").appendChild(inputCinco);
let prestado = document.createTextNode("Prestado");
document.getElementById("doceTdId").appendChild(prestado);

let inputSeis = document.createElement("input");
inputSeis.id = "inputSeisId";
inputSeis.setAttribute("name", "prestado");
inputSeis.setAttribute("type", "radio");
inputSeis.setAttribute("value", "no_prestado");
inputSeis.setAttribute("checked", "checked");
document.getElementById("doceTdId").appendChild(inputSeis);
let noPrestado = document.createTextNode("No prestado");
document.getElementById("doceTdId").appendChild(noPrestado);

//22 - Elemento p
let elementoP = document.createElement("p");
elementoP.id = "elementoPId";
document.getElementById("fieldsetId").appendChild(elementoP);

//23 - input enviar
let inputEnviar = document.createElement("input");
inputEnviar.id = "inputEnviarId";
inputEnviar.setAttribute("type", "submit");
inputEnviar.setAttribute("value", "Enviar");
document.getElementById("elementoPId").appendChild(inputEnviar);

//24 - input eliminar
let inputEliminar = document.createElement("input");
inputEliminar.id = "inputEliminarId";
inputEliminar.setAttribute("type", "submit");
inputEliminar.setAttribute("value", "Eliminar");
document.getElementById("elementoPId").appendChild(inputEliminar);
