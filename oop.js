class FiltroNumeros {
  constructor(numeros) {
    this.numeros = numeros;
  }

  filtrarPares() {
    return this.numeros.filter((numero) => numero % 2 === 0);
  }
}

const exemploOOP = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filtro = new FiltroNumeros(numeros);
  console.log(filtro.filtrarPares()); // [2, 4, 6, 8, 10]
};

module.exports = exemploOOP;
