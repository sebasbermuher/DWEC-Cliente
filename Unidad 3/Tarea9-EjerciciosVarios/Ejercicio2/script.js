array = [4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
array.sort();
array.sort(paresPrimero);
console.log(array);

function paresPrimero(num1, num2) {
  if (num1 % 2 == 0) {
    return -1; //num1 es menor que num2
  }
  if (num1 % 2 != 0) {
    return 1; //num1 es mayor que num2
  }
  return 0;
}
