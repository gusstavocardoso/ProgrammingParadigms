const exemploFuncional = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const isPar = (numero) => numero % 2 === 0;
  const numerosPares = numeros.filter(isPar);
  console.log(numerosPares); // [2, 4, 6, 8, 10]
};

module.exports = exemploFuncional;
