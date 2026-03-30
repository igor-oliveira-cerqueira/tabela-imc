export function calcularIMC(kg, altura) {
    let imc = kg / (altura*altura);
    return imc
};

export function classificar(imc, linha) {
    let classificacao = linha.querySelector(".classificacao")
    if (imc < 18.5) {
        classificacao.textContent = "Abaixo do peso"
    } else if (imc > 18.5 && imc <= 24.9) {
        classificacao.textContent = "Peso normal"
    } else if (imc > 25 && imc <= 29.9) {
        classificacao.textContent = "Sobrepeso"
    } else if (imc > 30 && imc <= 34.9) {
        classificacao.textContent = "Obesidade Grau I"
    } else if (imc > 35 && imc <= 39.9) {
        classificacao.textContent = "Obesidade Grau II"
    } else {
        classificacao.textContent = "Obesidade Grau III (Mórbida)"
    }
};

export function customizar(status) {
    if (status.textContent == "Obesidade Grau III (Mórbida)") {
        status.classList.add("perigo")
    } else if (status.textContent == "Peso normal") {
        status.classList.add("normal")
    } else {
        status.classList.add("outros")
    }
}