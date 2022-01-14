function insertarUltimoLi() {
  let textoPrompt = prompt("Introduce nuevo elemento li:");

  //creamos el elemento li
  let nuevoLi = document.createElement("li");

  //insertamos el texto dentro del ultimo li
  let nuevoNodo = document.body.children[0].appendChild(nuevoLi);
  let liArray = document.getElementsByTagName("li");
  let tamañoLi = liArray.length;
  let ultimoLi = tamañoLi - 1;
  //inserta el texto del prompt en el ultimo li
  document.body.children[0].children[ultimoLi].innerText = textoPrompt;
}

function eliminarElemento1() {
  let ul = document.getElementById("lista");
  ul.removeChild(ul.children[0]);
}

function eliminarElemento2() {
  let liArray2 = document.getElementsByTagName("li");
  let tamañoLi2 = liArray2.length;
  let ultimoLi2 = tamañoLi2 - 1;

  let ul = document.getElementById("lista");
  ul.removeChild(ul.children[ultimoLi2]);
}
