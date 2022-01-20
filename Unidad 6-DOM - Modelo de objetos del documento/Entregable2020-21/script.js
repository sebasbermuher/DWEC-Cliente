function crearTabla() {
  let tablaGenerada = document.getElementById("tablaGeneradaId");
  tablaGenerada.innerHTML = "";

  //declaro los valores de cada elemento
  let columnas = document.getElementById("columnasId").value;
  let filas = document.getElementById("filasId").value;
  let texto = document.getElementById("textoId").value;
  let grosorBorde = document.getElementById("grosorBordeId").value;
  let colorBorde = document.getElementById("colorBordeId").value;

  //creo la tabla
  let elementoTabla = document.createElement("table");

  //agrego el estilo para el grosor del borde
  if (grosorBorde != null) {
    elementoTabla.style =
      "border: " + grosorBorde + "px solid " + colorBorde + ";";
  }

  //si el input de header esta chekeado
  if (document.getElementById("headerId").checked) {
    let elementoTr = document.createElement("tr");
    for (let x = 0; x < columnas; x++) {
      let elementoTh = document.createElement("th");
      elementoTh.innerText = texto;
      if (grosorBorde != null) {
        elementoTh.style =
          "border: " + grosorBorde + "px solid " + colorBorde + ";";
      }
      elementoTr.appendChild(elementoTh);
    }
    elementoTabla.appendChild(elementoTr);
  }

  //insertamos filas y columnas
  //finalmente se crea la tabla con el texto insertado
  for (let i = 0; i < filas; i++) {
    let elementoTr = document.createElement("tr");

    for (let x = 0; x < columnas; x++) {
      let elementoTh = document.createElement("td");
      elementoTh.innerText = texto;
      if (grosorBorde != null) {
        elementoTh.style =
          "border: " + grosorBorde + "px solid  " + colorBorde + ";";
      }
      elementoTr.appendChild(elementoTh);
    }
    elementoTabla.appendChild(elementoTr);
  }
  tablaGenerada.appendChild(elementoTabla);
}
