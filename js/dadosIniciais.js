// Dados iniciais: só são gravados se a chave ainda não existir no localStorage.
// Assim o professor já abre o sistema com 5 registros de cada,
// e se alguém excluir tudo, os dados não voltam sozinhos.

if (localStorage.getItem("tutores") === null) {
    const tutoresIniciais = [
        { id: 1, nome: "Claudio Narah da Silva", cpf: "11110002503", endereco: "Av. Pascoal Vinhas, 201", telefone: "53999999999", tipoDomicilio: "Casa" },
        { id: 2, nome: "Mariana Souza Lopes", cpf: "22233344455", endereco: "Rua Sete de Setembro, 850", telefone: "53988887777", tipoDomicilio: "Apartamento" },
        { id: 3, nome: "João Pedro Almeida", cpf: "33344455566", endereco: "Rua Barão do Triunfo, 45", telefone: "53991112222", tipoDomicilio: "Casa" },
        { id: 4, nome: "Fernanda Rocha Dias", cpf: "44455566677", endereco: "Av. Santa Tecla, 1200", telefone: "53984443333", tipoDomicilio: "Condominio com quintal" },
        { id: 5, nome: "Ricardo Lima Farias", cpf: "55566677788", endereco: "Rua General Osório, 310", telefone: "53997776666", tipoDomicilio: "Apartamento" }
    ]
    persistir("tutores", tutoresIniciais)
}

if (localStorage.getItem("animais") === null) {
    const animaisIniciais = [
        { id: 1, nome: "Bolinha", raca: "Shih-tzu", cor: "Branco com marrom", sexo: "Fêmea", idade: 5, peso: 4.3, dataRegistro: "2023-12-05", motivoResgate: "Abandono", vacinado: true, castrado: false },
        { id: 2, nome: "Thor", raca: "Vira-lata", cor: "Caramelo", sexo: "Macho", idade: 3, peso: 12.5, dataRegistro: "2024-03-18", motivoResgate: "Encontrado na rua", vacinado: true, castrado: true },
        { id: 3, nome: "Mel", raca: "Labrador", cor: "Dourado", sexo: "Fêmea", idade: 7, peso: 28, dataRegistro: "2024-07-02", motivoResgate: "Maus-tratos", vacinado: true, castrado: true },
        { id: 4, nome: "Pipoca", raca: "Poodle", cor: "Branco", sexo: "Macho", idade: 2, peso: 5.1, dataRegistro: "2025-01-22", motivoResgate: "Abandono", vacinado: false, castrado: false },
        { id: 5, nome: "Luna", raca: "Vira-lata", cor: "Preto", sexo: "Fêmea", idade: 1, peso: 8.7, dataRegistro: "2025-09-10", motivoResgate: "Ninhada abandonada", vacinado: true, castrado: false }
    ]
    persistir("animais", animaisIniciais)
}

if (localStorage.getItem("agendamentos") === null) {
    const agendamentosIniciais = [
        { id: 1, tutorId: 1, animalId: 1, dataHora: "2026-10-19T10:30", tipo: "Acompanhamento", status: "Concluído", descricao: "O animal se encontra em perfeitas condições." },
        { id: 2, tutorId: 2, animalId: 2, dataHora: "2026-11-05T14:00", tipo: "Adoção", status: "Concluído", descricao: "Adoção realizada, tutor recebeu as orientações de cuidados." },
        { id: 3, tutorId: 3, animalId: 3, dataHora: "2026-11-28T09:00", tipo: "Visita", status: "Agendado", descricao: "Primeira visita para conhecer o ambiente da casa." },
        { id: 4, tutorId: 4, animalId: 4, dataHora: "2026-12-03T16:30", tipo: "Vacinação", status: "Agendado", descricao: "Aplicar a vacina V10." },
        { id: 5, tutorId: 5, animalId: 5, dataHora: "2026-11-15T11:00", tipo: "Visita", status: "Cancelado", descricao: "Tutor pediu para remarcar." }
    ]
    persistir("agendamentos", agendamentosIniciais)
}
