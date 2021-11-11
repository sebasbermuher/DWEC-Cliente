let radio = prompt("Introduce valor de Radio:");
let cuadrado_radio = Math.pow(radio, 2);
let cubo_radio = Math.pow(radio, 3);
let diametro = 2 * radio;
let perimetro = Math.PI * diametro;
let area_circulo = Math.PI * cuadrado_radio;
let area_esfera = cuadrado_radio * Math.PI * 4;
let volumen = (4 / 3) * Math.PI * cubo_radio;

alert(
  " Valor de Radio: " +
    radio +
    "cm\n Diametro: " +
    diametro +
    "cm\n Perimetro: " +
    perimetro +
    "cm2\n Area del Circulo: " +
    area_circulo +
    "cm3\n Area de la Esfera: " +
    area_esfera +
    " cm3\n Volumen de la Esfera: " +
    volumen +
    " cm3"
);
