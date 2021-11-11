class Carta {
  constructor(tipo) {
    this.Tipo = tipo;
  }
  set tipo(tipo) {
    this.Tipo = tipo;
  }
  get tipo() {
    return this.Tipo;
  }
}

class Baraja {
  constructor() {
    this.Cartas = [];
    this.generadorBarajas();
  }
  get cartas() {
    return this.Csartas;
  }
}

class Jugador {
  constructor(tipo) {
    this.Tipo = Tipo;
    this.cartas = [];
    this.max_Cartas = 6;
  }
  set tipo(tipo) {
    this.Tipo = Tipo;
  }
  get tipo() {
    return this.Tipo;
  }
  set cartas(cartas) {}
  get cartas() {
    return this.cartas;
  }
  set max_Cartas(Carta) {}
  get max_Cartas() {
    return this.max_Cartas;
  }
}
