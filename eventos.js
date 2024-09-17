const EventEmitter = require("events");

class FiltroNumeros extends EventEmitter {
  constructor(numeros) {
    super();
    this.numeros = numeros;
  }

  filtrarPares() {
    const pares = this.numeros.filter((numero) => numero % 2 === 0);
    this.emit("paresFiltrados", pares);
  }
}

const exemploEventos = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filtro = new FiltroNumeros(numeros);

  filtro.on("paresFiltrados", (pares) => {
    console.log("Números pares filtrados:", pares);
  });

  filtro.filtrarPares(); // Números pares filtrados: [2, 4, 6, 8, 10]
};

module.exports = exemploEventos;
