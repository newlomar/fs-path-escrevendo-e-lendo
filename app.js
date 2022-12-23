const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//   {
//     nome: "Newton",
//   },
//   {
//     nome: "Matheus",
//   },
//   {
//     nome: "Ana",
//   },
//   {
//     nome: "Beatriz",
//   },
// ];

// const json = JSON.stringify(pessoas, "", 2);

// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);

  return dados;
}

const l = async () => {
  const dadosArquivo = await leArquivo(caminhoArquivo);
  const dadosLimpo = JSON.parse(dadosArquivo);
  console.log(dadosLimpo[0]);
};

l();
