const readline = require("readline");
const exemploFuncional = require("./funcional");
const exemploOOP = require("./oop");
const exemploImperativo = require("./imperativo");
const exemploEventos = require("./eventos");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Escolha qual exemplo deseja executar:");
console.log("1: Funcional");
console.log("2: Orientado a Objetos (OOP)");
console.log("3: Imperativo");
console.log("4: Orientado a Eventos");

rl.question("Digite o número da sua escolha: ", (escolha) => {
  switch (escolha) {
    case "1":
      console.log("Executando exemplo Funcional...");
      exemploFuncional();
      break;
    case "2":
      console.log("Executando exemplo OOP...");
      exemploOOP();
      break;
    case "3":
      console.log("Executando exemplo Imperativo...");
      exemploImperativo();
      break;
    case "4":
      console.log("Executando exemplo Orientado a Eventos...");
      exemploEventos();
      break;
    default:
      console.log("Escolha inválida. Tente novamente.");
  }
  rl.close();
});
