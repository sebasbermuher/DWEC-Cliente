function IMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = peso / altura;
  alert("Su indice de masa corporal es " + imc);
}
function FCM() {
  let edad = document.getElementById("edad").value;
  let fcm = 220 - edad;
  alert("Su frecuencia cardiaca maxima es " + fcm);
}
