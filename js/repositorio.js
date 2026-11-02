function listar(chave){
    return recuperarRegistros(chave)
}
function buscar(chave, id) {
    const lista = listar(chave)
    const registro = lista.find(r => r.id === id)
    if (registro) {
        return registro
    } else {
        return null
    }
}
function proximoId(chave) {
    const lista = listar(chave)
    if (lista.length === 0) {
        return 1
    }
    return lista[lista.length - 1].id + 1
}
function adicionar(chave, dados) {
    const lista = listar(chave)
    dados.id = proximoId(chave)
    lista.push(dados)
    persistir(chave, lista)
    return dados
}
function excluir(chave, id) {
    const lista = listar(chave)
    const indice = lista.findIndex(r => r.id === id)
    if (indice !== -1) {
        lista.splice(indice, 1)
        persistir(chave, lista)
        return true
    } else {
        return false
    }
}
function atualizar(chave, id, dados) {
    const lista = listar(chave)
    const indice = lista.findIndex(r => r.id === id)
    if (indice !== -1) {
        dados.id = id
        lista[indice] = dados
        persistir(chave, lista)
        return true
    } else {
        return false
    }
}