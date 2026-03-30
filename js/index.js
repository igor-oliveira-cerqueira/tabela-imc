import { calcularIMC, classificar, customizar } from "./opc.js"

let linhas = document.querySelectorAll("tbody tr");

for (let i = 0; i < linhas.length; i++) {
    
    let linha = linhas[i];

    let altura = Number(linha.querySelector(".altura").textContent);
    let kg = Number (linha.querySelector(".kg").textContent);

    let imc = calcularIMC(kg, altura);
    console.log(imc);
    
    linha.querySelector(".imc").textContent = imc.toFixed(2);

    classificar(imc, linha);
};

linhas.forEach( function (linha){
    let celulas = linha.children;
    customizar(celulas[5]);
})

