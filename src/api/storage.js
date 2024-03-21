export function getTurnos(key) {
    const data = localStorage.getItem(key) || '[]';
    const turnos = JSON.parse(data)
    return turnos;
}

export function setTurnos(key, turnos){
    localStorage.setItem(key, JSON.stringify(turnos))
}

export function addTurno(key, turno){
    const turnos = getTurnos(key)
    turnos.push(turno)
    localStorage.setItem(key, JSON.stringify(turnos))
}

export function removerPrimerTurno(key){
    const turnos = getTurnos(key)
    const turno = turnos.shift()
    localStorage.setItem(key, JSON.stringify(turnos))
    return turno
}

export function getNumeroTurno() {
   const numeroTurno = localStorage.getItem('numeroTurno') || '0';
   const incremento = parseInt(numeroTurno) + 1
    localStorage.setItem('numeroTurno', incremento)
    return incremento
}

export function reinicioDiario() {
    const fecha = localStorage.getItem('fecha') || '0';
    const fechaActual = new Date().toLocaleDateString()
    if (fecha != fechaActual){
        localStorage.setItem('fecha', fechaActual)
        localStorage.setItem('numeroTurno', 0)
        localStorage.setItem('turnosLlamados', '[]')
        localStorage.setItem('turnosPrioritario', '[]')
        localStorage.setItem('turnosClienteNormal', '[]')
        localStorage.setItem('turnosBuenaGente', '[]')
    }
}


