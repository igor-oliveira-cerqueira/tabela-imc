function esconderLinha(linha, textoInput) {

    let celulas = Array.from(linha.children);
    let encontrado = false;

    celulas.forEach(function (celula) {
        let textoCelula = celula.textContent.toLowerCase();

        if (textoCelula.includes(textoInput)) {
        encontrado = true;
    }

    linha.style.display = encontrado ? "table-row" : "none";
    });

}

export function pesquisar(input, linhas) {
    
    let textoInput = input.value.toLowerCase()

    linhas.forEach(function (linha) {
        esconderLinha(linha, textoInput);
    });

}