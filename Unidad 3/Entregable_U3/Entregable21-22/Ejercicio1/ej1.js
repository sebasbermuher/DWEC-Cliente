class Dado {
  LanzarDado = function LanzarDado() {
    let num = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log(num);
  };
}

class Juagador {
  constructor(nombre, color_ficha, quesiletes) {
    this.nombre = nombre;
    this.color_ficha = color_ficha;
    this.quesiletes = quesiletes;
  }
  sumar_quesilete = function sumar_quesilete() {
    this.quesiletes += 1;
  };
}
