let numero = new Number(prompt("Introduce un numero entero:"));

let exponencial = numero.toExponential();
let decimal = numero.toFixed(4);
let binario = numero.toString(2);
let octal = numero.toString(8);
let hexadecimal = numero.toString(16);

alert(
  " Numero: " +
    numero +
    "\n Exponencial: " +
    exponencial +
    "\n Decimal: " +
    decimal +
    "\n Binario: " +
    binario +
    "\n Octal: " +
    octal +
    "\n Hexadecimal: " +
    hexadecimal
);
