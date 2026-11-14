function carregarSelects() {
    let opcoesTutores = `<option value="">Selecione...</option>`
    listar("tutores").forEach(t => {
        opcoesTutores += `<option value="${t.id}">${t.nome}</option>`
    })
    document.getElementById("tutorId").innerHTML = opcoesTutores

    let opcoesAnimais = `<option value="">Selecione...</option>`
    listar("animais").forEach(a => {
        opcoesAnimais += `<option value="${a.id}">${a.nome}</option>`
    })
    document.getElementById("animalId").innerHTML = opcoesAnimais
}

function montarTabela() {
    const lista = listar("agendamentos")
    let linhas = ""
    lista.forEach(ag => {
        const tutor = buscar("tutores", ag.tutorId)
        const animal = buscar("animais", ag.animalId)
        linhas += `<tr>
            <td>${tutor ? tutor.nome : "(removido)"}</td>
            <td>${animal ? animal.nome : "(removido)"}</td>
            <td>${ag.dataHora.replace("T", " ")}</td>
            <td>${ag.tipo}</td>
            <td>${ag.status}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick='buscarProForm(${ag.id})'>Alterar</button>
                <button class="btn btn-sm btn-danger" onclick='excluirAgendamento(${ag.id})'>Excluir</button>
            </td>
        </tr>`
    })
    document.getElementById("tabela").innerHTML = linhas
}

function gravarDoForm() {
    const idTexto = document.getElementById("id").value
    const tutorId = document.getElementById("tutorId").value
    const animalId = document.getElementById("animalId").value
    if (tutorId === "" || animalId === "") {
        alert("Selecione o tutor e o animal.")
        return
    }
    const dados = {
        tutorId: Number(tutorId),
        animalId: Number(animalId),
        dataHora: document.getElementById("dataHora").value,
        tipo: document.getElementById("tipo").value,
        status: document.getElementById("status").value,
        descricao: document.getElementById("descricao").value
    }
    if (idTexto === "") {
        adicionar("agendamentos", dados)
    } else {
        atualizar("agendamentos", Number(idTexto), dados)
    }
    montarTabela()
    document.getElementById("formulario").reset()
}

function buscarProForm(id) {
    const ag = buscar("agendamentos", id)
    if (ag) {
        document.getElementById("id").value = ag.id
        document.getElementById("tutorId").value = ag.tutorId
        document.getElementById("animalId").value = ag.animalId
        document.getElementById("dataHora").value = ag.dataHora
        document.getElementById("tipo").value = ag.tipo
        document.getElementById("status").value = ag.status
        document.getElementById("descricao").value = ag.descricao
    }
}

function excluirAgendamento(id) {
    excluir("agendamentos", id)
    montarTabela()
}

carregarSelects()
montarTabela()