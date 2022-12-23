const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");

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

const json = JSON.stringify(pessoas);

fs.writeFile(caminhoArquivo, json, {
  flag: "a",
  //encoding: "utf8",
});
