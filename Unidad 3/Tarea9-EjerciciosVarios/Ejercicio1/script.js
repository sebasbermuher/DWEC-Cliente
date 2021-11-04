function posicion_ocupada_3(elemento) {
  let array = [
    4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1,
  ];
  console.log("El numero 3 se encuentra en las posiciones:");
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] == elemento) {
      console.log(i);
    }
  }
}
posicion_ocupada_3(3);
