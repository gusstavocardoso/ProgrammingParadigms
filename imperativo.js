const exemploImperativo = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }

  console.log(numerosPares); // [2, 4, 6, 8, 10]
};

module.exports = exemploImperativo;
