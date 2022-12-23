const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");

const pessoas = [
  {
    nome: "Newton",
  },
  {
    nome: "Matheus",
  },
  {
    nome: "Ana",
  },
  {
    nome: "Beatriz",
  },
];

const json = JSON.stringify(pessoas, "", 2);
