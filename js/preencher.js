async function preencher(linhas) {
    const promise = await fetch('http://127.0.0.1:5500/bd/bd.json');
    let pacientes = await promise.json();

    Array.from(linhas).forEach(function (linha, index) {
        let celulas = linha.children;
        celulas[0].textContent = pacientes[index].nome;
        celulas[1].textContent = pacientes[index].idade;
        celulas[2].textContent = pacientes[index].altura;
        celulas[3].textContent = pacientes[index].peso;
    });

}

export { preencher };