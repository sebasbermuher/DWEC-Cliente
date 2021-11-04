let num = 5;
par_impar = () => {
  if (num % 2 != 0) {
    return "El numero " + num + " es impar";
  } else {
    return "El numero " + num + " es par";
  }
};

console.info(par_impar(5));
