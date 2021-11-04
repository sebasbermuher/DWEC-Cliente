let ventana;
let texto =
  "Aquí estamos todos pa' cantarte tu canción estamos apiñados como balas de cañón y es que no hay quien pueda con esta afición y aunque último estuvieras siempre te ven campeón. Beeeeeetis, Beeeeeetis, Beeeeeetis. Ahora Betis, ahora, no dejes de atacar ahora Betis, ahora porque el gol ya va a llegar. Beeeeeetis, Beeeeeetis, Beeeeeetis. Hay una leyenda que recorre el mundo entero, verde y blanco sus colores, blanco y verde es el sendero, luz en la mañana y en la noche quejío y quiebro. Betis musho Betis, en el mundo lo que más quiero. Luz en la mañana y en la noche quejío y quiebro. Betis musho Betis, en este mundo lo que más quiero. Beeeeeetis, Beeeeeetis, Beeeeeetis Ahora Betis, ahora, no dejes de atacar, ahora Betis ahora porque el gol ya va a llegar. Beeeeeetis, Beeeeeetis, Beeeeeetis, Beeeeeetis, Beeeeeetis.";

//FUNCIONES
function abrirVentana() {
  let confirmacion = confirm("¿Desea abrir la ventana?");
  if (confirmacion) {
    ventana = window.open(
      "",
      "",
      "width=200,height=80,location=no,toolbar=no,menubar=no,resizable=no,top=500,left=500"
    );
    ventana.document.write(texto); //pasamos el texto dentro de la ventana
    ventana.document.write(
      '<br><br><button onclick= "window.close()">Cerrar</button>'
    ); // boton dentro de la ventana para poder cerrarla
  } else {
    alert("No quieres abrir la ventana :(");
  }
}

function cerrarVentana() {
  if (ventana === undefined) {
    alert(
      "No has abierto la ventana. Para cerrar la ventana antes debes abrirla."
    );
  }
  if (ventana.closed) {
    alert("Error, la ventana ya estaba cerrada.");
  } else {
    ventana.close();
  }
}

function moverVentana() {
  ventana.moveBy(10, 10);
}

function moverVentanaPosicion100100() {
  ventana.moveTo(100, 100);
}

function aumentarVentana() {
  ventana.resizeBy(10, 10);
}

function aumentarVentana400x200() {
  ventana.resizeTo(400, 200);
}

function colocarScrollArriba() {
  ventana.scrollTo(0, 0);
}

function colocarScroll10px() {
  ventana.scrollTo(10, 10);
}
