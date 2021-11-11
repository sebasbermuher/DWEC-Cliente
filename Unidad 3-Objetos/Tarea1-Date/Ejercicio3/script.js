function fun_formato() {
  let formato = document.getElementById("formato").value; // pilla el valor(formato) introducido
  let fecha = new Date(); //fecha actual

  let formato1 = "15/10/2020";
  let formato2 = "Jueves, 15 de octubre de 2020";
  let formato3 = "Thursday, October 15, 2020";

  let dia = fecha.getDate();
  let semana = fecha.getDay();
  let mes = fecha.getMonth() + 1;
  let year = fecha.getFullYear();
  let dia_aux;
  let mes_aux;

  if (formato == formato1) {
    alert(dia + "/" + mes + "/" + year);
  } else if (formato == formato2) {
    switch (semana) {
      case 0:
        dia_aux = "Domingo";
        break;
      case 1:
        dia_aux = "Lunes";
        break;
      case 2:
        dia_aux = "Martes";
        break;
      case 3:
        dia_aux = "Miercoles";
        break;
      case 4:
        dia_aux = "Jueves";
        break;
      case 5:
        dia_aux = "Viernes";
        break;
      case 6:
        dia_aux = "Sabado";
        break;
    }

    switch (mes) {
      case 0:
        mes_aux = "Enero";
        break;
      case 1:
        mes_aux = "Febrero";
        break;
      case 2:
        mes_aux = "Marzo";
        break;
      case 3:
        mes_aux = "Abril";
        break;
      case 4:
        mes_aux = "Mayo";
        break;
      case 5:
        mes_aux = "Junio";
        break;
      case 6:
        mes_aux = "Julio";
        break;
      case 7:
        mes_aux = "Agosto";
        break;
      case 8:
        mes_aux = "Septiembre";
        break;
      case 9:
        mes_aux = "Octubre";
        break;
      case 10:
        mes_aux = "Noviembre";
        break;
      case 11:
        mes_aux = "Diciembre";
        break;
    }
    alert(dia_aux + ", " + dia + " de " + mes_aux + " de " + year);
  } else if (formato == formato3) {
    switch (semana) {
      case 0:
        dia_aux = "Sunday";
        break;
      case 1:
        dia_aux = "Monday";
        break;
      case 2:
        dia_aux = "Tuesday";
        break;
      case 3:
        dia_aux = "Wednesday";
        break;
      case 4:
        dia_aux = "Thursday";
        break;
      case 5:
        dia_aux = "Friday";
        break;
      case 6:
        dia_aux = "Saturday";
        break;
    }

    switch (mes) {
      case 0:
        mes_aux = "January";
        break;
      case 1:
        mes_aux = "February";
        break;
      case 2:
        mes_aux = "March";
        break;
      case 3:
        mes_aux = "April";
        break;
      case 4:
        mes_aux = "May";
        break;
      case 5:
        mes_aux = "June";
        break;
      case 6:
        mes_aux = "July";
        break;
      case 7:
        mes_aux = "August";
        break;
      case 8:
        mes_aux = "September";
        break;
      case 9:
        mes_aux = "October";
        break;
      case 10:
        mes_aux = "November";
        break;
      case 11:
        mes_aux = "December";
        break;
    }
    alert(dia_aux + ", " + mes_aux + " " + dia + ", " + year);
  }
}
