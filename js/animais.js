function montarTabela() {
    const lista = listar("animais")
    let linhas = ""
    lista.forEach(a => {
        linhas += `<tr>
            <td>${a.nome}</td>
            <td>${a.raca}</td>
            <td>${a.cor}</td>
            <td>${a.sexo}</td>
            <td>${a.idade}</td>
            <td>${a.peso}</td>
            <td>${a.vacinado ? "Sim" : "Não"}</td>
            <td>${a.castrado ? "Sim" : "Não"}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick='buscarProForm(${a.id})'>Alterar</button>
                <button class="btn btn-sm btn-danger" onclick='excluirAnimal(${a.id})'>Excluir</button>
            </td>
        </tr>`
    })
    document.getElementById("tabela").innerHTML = linhas
}

function gravarDoForm() {
    const idTexto = document.getElementById("id").value
    const dados = {
        nome: document.getElementById("nome").value,
        raca: document.getElementById("raca").value,
        cor: document.getElementById("cor").value,
        sexo: document.getElementById("sexo").value,
        idade: Number(document.getElementById("idade").value),
        peso: Number(document.getElementById("peso").value),
        dataRegistro: document.getElementById("dataRegistro").value,
        motivoResgate: document.getElementById("motivoResgate").value,
        vacinado: document.getElementById("vacinado").checked,
        castrado: document.getElementById("castrado").checked
    }
    if (idTexto === "") {
        adicionar("animais", dados)
    } else {
        atualizar("animais", Number(idTexto), dados)
    }
    montarTabela()
    document.getElementById("formulario").reset()
}

function buscarProForm(id) {
    const a = buscar("animais", id)
    if (a) {
        document.getElementById("id").value = a.id
        document.getElementById("nome").value = a.nome
        document.getElementById("raca").value = a.raca
        document.getElementById("cor").value = a.cor
        document.getElementById("sexo").value = a.sexo
        document.getElementById("idade").value = a.idade
        document.getElementById("peso").value = a.peso
        document.getElementById("dataRegistro").value = a.dataRegistro
        document.getElementById("motivoResgate").value = a.motivoResgate
        document.getElementById("vacinado").checked = a.vacinado
        document.getElementById("castrado").checked = a.castrado
    }
}

function excluirAnimal(id) {
    excluir("animais", id)
    montarTabela()
}

montarTabela()