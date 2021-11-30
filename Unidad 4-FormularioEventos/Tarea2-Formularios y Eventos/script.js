let array = document.getElementsByClassName("card");
let objeto1 = null;
let objeto2 = null;
let contador = 0;

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", mostrar);
}
function mostrar(e) {
  let carta = e.target;
  console.log(carta.id);

  switch (carta.id) {
    case (carta.id = "card_1"):
      carta.src = "img/01_lisa.png";
      break;
    case (carta.id = "card_2"):
      carta.src = "img/02_bart.png";
      break;
    case (carta.id = "card_3"):
      carta.src = "img/03_homer.png";
      break;
    case (carta.id = "card_4"):
      carta.src = "img/04_marge.png";
      break;
    case (carta.id = "card_5"):
      carta.src = "img/05_maggie.png";
      break;
    case (carta.id = "card_6"):
      carta.src = "img/06_flanders.png";
      break;
  }

  if (contador === 0) {
    objeto1 = carta;
    contador = 1;
  } else {
    objeto2 = carta;
    contador = 0;
  }

  if (objeto1.id == objeto2.id) {
    alert("correcto");
    objeto1.className = "acierto";
    objeto2.className = "acierto";
    objeto1.src = "";
    objeto2.src = "";
    objeto1 = null;
    objeto2 = null;
  } else {
    alert("has fallado");
    objeto1.src = "";
    objeto2.src = "";
    objeto1 = null;
    objeto2 = null;
  }
}
