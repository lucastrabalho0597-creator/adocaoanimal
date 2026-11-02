function montarTabela() {
    const lista = listar("tutores")
    let linhas = ""
    lista.forEach(t => {
        linhas += `<tr>
            <td>${t.nome}</td>
            <td>${t.cpf}</td>
            <td>${t.endereco}</td>
            <td>${t.telefone}</td>
            <td>${t.tipoDomicilio}</td>
            <td></td>
        </tr>`
    })
    document.getElementById("tabela").innerHTML = linhas
}

montarTabela()