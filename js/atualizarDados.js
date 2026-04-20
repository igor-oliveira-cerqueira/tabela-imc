export function atualizarTabela(linhas, calcularIMC, classificar, customizar) {
    linhas.forEach(function (linha) {

        let celulas = Array.from(linha.children);
        let altura = Number(celulas[2].textContent);
        let kg = Number(celulas[3].textContent);
        let imc = calcularIMC(kg, altura);
        celulas[4].textContent = imc.toFixed(2);
        classificar(imc, linha);
        let status = celulas[5];
        customizar(status);
    });
}