function persistir(chave, valorJson) {
    localStorage.setItem(chave, JSON.stringify(valorJson));
}
function recuperarRegistros(chave) {
    const regs = localStorage.getItem(chave)
    if (regs) {
        return JSON.parse(regs)
    }
    else {
        return []
    }
}