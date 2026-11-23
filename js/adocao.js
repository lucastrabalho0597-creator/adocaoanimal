function simNao(valor) {
    return valor ? "Sim" : "Não"
}

function mostrarTutores() {
    const lista = listar("tutores")
    let cards = ""
    lista.forEach(t => {
        cards += `<div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${t.nome}</h5>
                    <p class="card-text mb-1"><strong>CPF:</strong> ${t.cpf}</p>
                    <p class="card-text mb-1"><strong>Endereço:</strong> ${t.endereco}</p>
                    <p class="card-text mb-1"><strong>Telefone:</strong> ${t.telefone}</p>
                    <p class="card-text mb-0"><strong>Domicílio:</strong> ${t.tipoDomicilio}</p>
                </div>
            </div>
        </div>`
    })
    if (lista.length === 0) {
        cards = `<p class="text-muted">Nenhum tutor cadastrado.</p>`
    }
    document.getElementById("listaTutores").innerHTML = cards
}

function mostrarAnimais() {
    const lista = listar("animais")
    let cards = ""
    lista.forEach(a => {
        cards += `<div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${a.nome}</h5>
                    <p class="card-text mb-1"><strong>Raça:</strong> ${a.raca}</p>
                    <p class="card-text mb-1"><strong>Cor:</strong> ${a.cor}</p>
                    <p class="card-text mb-1"><strong>Sexo:</strong> ${a.sexo}</p>
                    <p class="card-text mb-1"><strong>Idade:</strong> ${a.idade} ano(s)</p>
                    <p class="card-text mb-1"><strong>Peso:</strong> ${a.peso} kg</p>
                    <p class="card-text mb-1"><strong>Vacinado:</strong> ${simNao(a.vacinado)}</p>
                    <p class="card-text mb-1"><strong>Castrado:</strong> ${simNao(a.castrado)}</p>
                    <p class="card-text mb-1"><strong>Data de registro:</strong> ${formatarData(a.dataRegistro)}</p>
                    <p class="card-text mb-0"><strong>Motivo do resgate:</strong> ${a.motivoResgate}</p>
                </div>
            </div>
        </div>`
    })
    if (lista.length === 0) {
        cards = `<p class="text-muted">Nenhum animal cadastrado.</p>`
    }
    document.getElementById("listaAnimais").innerHTML = cards
}

function mostrarAgendamentos() {
    const lista = listar("agendamentos")
    let cards = ""
    lista.forEach(ag => {
        const tutor = buscar("tutores", ag.tutorId)
        const animal = buscar("animais", ag.animalId)

        let blocoTutor = `<p class="text-muted mb-2">Tutor removido.</p>`
        if (tutor) {
            blocoTutor = `<p class="mb-1"><strong>Tutor:</strong> ${tutor.nome}</p>
                    <p class="mb-2"><strong>Endereço:</strong> ${tutor.endereco}</p>`
        }

        let blocoAnimal = `<p class="text-muted mb-2">Animal removido.</p>`
        if (animal) {
            blocoAnimal = `<p class="mb-1"><strong>Animal:</strong> ${animal.nome}</p>
                    <p class="mb-1"><strong>Raça:</strong> ${animal.raca} · <strong>Cor:</strong> ${animal.cor}</p>
                    <p class="mb-1"><strong>Sexo:</strong> ${animal.sexo} · <strong>Idade:</strong> ${animal.idade} ano(s) · <strong>Peso:</strong> ${animal.peso} kg</p>
                    <p class="mb-2"><strong>Vacinado:</strong> ${simNao(animal.vacinado)} · <strong>Castrado:</strong> ${simNao(animal.castrado)}</p>`
        }

        cards += `<div class="col">
            <div class="card h-100">
                <div class="card-header d-flex justify-content-between">
                    <strong>${ag.tipo}</strong>
                    <span>${ag.status}</span>
                </div>
                <div class="card-body">
                    <p class="mb-2"><strong>Data e hora:</strong> ${formatarData(ag.dataHora)}</p>
                    ${blocoTutor}
                    ${blocoAnimal}
                    <p class="mb-0"><strong>Descrição:</strong> ${ag.descricao ? ag.descricao : "Sem descrição"}</p>
                </div>
            </div>
        </div>`
    })
    if (lista.length === 0) {
        cards = `<p class="text-muted">Nenhum agendamento cadastrado.</p>`
    }
    document.getElementById("listaAgendamentos").innerHTML = cards
}

function mostrarTudo() {
    mostrarTutores()
    mostrarAnimais()
    mostrarAgendamentos()
}

mostrarTudo()

// Atualiza sozinha se os dados mudarem em outra aba (ex.: admin aberto ao lado)
window.addEventListener("storage", mostrarTudo)