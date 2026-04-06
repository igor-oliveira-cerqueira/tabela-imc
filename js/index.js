import { calcularIMC, classificar, customizar, pesquisar } from "./opc.js"

const linhas = document.querySelectorAll("tbody tr");
const input = document.querySelector(".entrada");


for (let i = 0; i < linhas.length; i++) {
    
    let linha = linhas[i];

    let altura = Number(linha.querySelector(".altura").textContent);
    let kg = Number (linha.querySelector(".kg").textContent);

    let imc = calcularIMC(kg, altura);
    
    linha.querySelector(".imc").textContent = imc.toFixed(2);

    classificar(imc, linha);
};

linhas.forEach( function (linha){
    let celulas = linha.children;
    customizar(celulas[5]);
});


input.addEventListener("input", function() {
    pesquisar(input, linhas);
});