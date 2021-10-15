function fun_formato() {
  let formatoHora = document.getElementById("select_formato").value; //cogemos el valor(select) que se ha introducido
  let fecha = new Date();

  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  let franjaHoraria = "AM";

  if (formatoHora === "1") {
    alert(hora + ":" + minutos + ":" + segundos);
  } else if (formatoHora === "2") {
    if (hora > 12) {
      hora = hora - 12;
      franjaHoraria = "PM";
      alert(hora + ":" + minutos + " " + franjaHoraria);
    } else {
      alert(hora + ":" + minutos + ":" + segundos + " " + franjaHoraria);
    }
  }
}
