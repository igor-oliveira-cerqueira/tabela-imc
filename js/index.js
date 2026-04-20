import { atualizarTabela } from "./atualizarDados.js";
import { preencher } from "./preencher.js";
import { pesquisar } from "./input.js";
import { calcularIMC, classificar, customizar } from "./opc.js";

const linhas = document.querySelectorAll("tbody tr");
const input = document.querySelector(".entrada");

await preencher(linhas);

atualizarTabela(linhas, calcularIMC, classificar, customizar);


input.addEventListener("input", function() {
    pesquisar(input, linhas);
});