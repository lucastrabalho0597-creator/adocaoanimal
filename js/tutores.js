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
            <td>
                <button class="btn btn-sm btn-warning" onclick='buscarProForm(${t.id})'>Alterar</button>
                <button class="btn btn-sm btn-danger" onclick='excluirTutor(${t.id})'>Excluir</button>
            </td>
        </tr>`
    })
    document.getElementById("tabela").innerHTML = linhas
}

function gravarDoForm() {
    // Usa o "required" dos campos do HTML: se algum estiver em branco ou inválido,
    // o navegador mostra o aviso no campo e não salva
    const formulario = document.getElementById("formulario")
    if (!formulario.reportValidity()) {
        return
    }
    const idTexto = document.getElementById("id").value
    const dados = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        tipoDomicilio: document.getElementById("tipoDomicilio").value
    }
    if (idTexto === "") {
        adicionar("tutores", dados)
    } else {
        atualizar("tutores", Number(idTexto), dados)
    }
    montarTabela()
    document.getElementById("formulario").reset()
}

function buscarProForm(id) {
    const t = buscar("tutores", id)
    if (t) {
        document.getElementById("id").value = t.id
        document.getElementById("nome").value = t.nome
        document.getElementById("cpf").value = t.cpf
        document.getElementById("endereco").value = t.endereco
        document.getElementById("telefone").value = t.telefone
        document.getElementById("tipoDomicilio").value = t.tipoDomicilio
    }
}

function excluirTutor(id) {
    if (confirm("Deseja excluir este tutor?")) {
        excluir("tutores", id)
        montarTabela()
    }
}

montarTabela()