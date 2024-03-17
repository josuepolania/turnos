
const turnosPrioritario = []
const turnosBuenaGente = []
const turnosClienteNormal = []
const turnosLlamados = []
let numeroTurno = 0
let turnosAtendidosBuenaGente = 0
let turnosAtendidosClienteNormal = 0

export function buscarTurnoPerdido(buscar) {
    let turno = {
        numeroTurno: "No hay Turnos en Cola"
    }
    console.log("buscar", buscar)
    const encontrado = turnosLlamados.find(turnosLlamado => turnosLlamado.numeroTurno == buscar)
    if (encontrado) {
        return encontrado
    } else {
        return turno
    }
}

export function cambiarEstado(turno, estado) {
    if (turno.numeroTurno != "No  hay turno en cola") {
        turno.estado = estado
    }
}

export function volverAllamarTurnoPerdido(turno) {
    if (turno.numeroTurno != "No hay Turnos en Cola") {
        turno.estado = "VUELTO A LLAMAR"
        turnosLlamados.unshift(turno)
    }
}

export function obtenerTurnosLlamados() {
    return turnosLlamados
}

export function llamarTurno() {
    let turno = {
        numeroTurno: "No hay Turnos en Cola"
    }
    if (turnosPrioritario.length > 0) {
        console.log("atender prioritario")
        turno = turnosPrioritario.shift()
        turnosLlamados.unshift(turno)
    } else {
        console.log("no hay gente en el prioritario")
        if (turnosBuenaGente.length > 0) {
            console.log("atender buena gente")
            if (turnosAtendidosBuenaGente < 3 || turnosClienteNormal.length == 0) {
                console.log("los turnos atendios es menor a 3")
                console.log("Atender buena gente")
                turno = turnosBuenaGente.shift()
                turnosLlamados.unshift(turno)
                turnosAtendidosBuenaGente = turnosAtendidosBuenaGente + 1
            } else {
                console.log("no los turnos son mayores")
                turno = atenderGenteNormal()
            }
        } else {
            console.log("no hay gente en la fila buena gente")
            turno = atenderGenteNormal()

        }
    }

    turno.estado = "LLAMADO"

    return turno

}

function atenderGenteNormal() {
    let turno = {
        numeroTurno: "No hay Turnos en Cola"
    }
    if (turnosClienteNormal.length > 0) {
        console.log("si hay gente en turno cliente normal")
        console.log("atender gente cliente normal")
        if (turnosAtendidosClienteNormal < 2) {
            console.log("si el contador de cliente normal es menor a 2")
            turno = turnosClienteNormal.shift()
            turnosLlamados.unshift(turno)
            turnosAtendidosClienteNormal = turnosAtendidosClienteNormal + 1


        } else {
            if (turnosBuenaGente.length > 0) {
                turno = turnosBuenaGente.shift()
                turnosLlamados.unshift(turno)
                turnosAtendidosBuenaGente = 1
                turnosAtendidosClienteNormal = 0

            } else {
                turnosAtendidosClienteNormal = turnosAtendidosClienteNormal + 1
                turno = turnosClienteNormal.shift()
                turnosLlamados.unshift(turno)
            }

        }

    } else {
        console.log("no hay gente en turno cliente normal")

    }

    return turno
}

export function pedirTurno(tipo) {
    numeroTurno = numeroTurno + 1
    const turno = {
        numeroTurno: numeroTurno,
        fechaSolitud: new Date(),
        tipo: tipo
    }
    if (tipo == "prioritario") (
        turnosPrioritario.push(turno)
    )
    if (tipo == "buenaGente") (
        turnosBuenaGente.push(turno)
    )
    if (tipo == "clienteNormal") (
        turnosClienteNormal.push(turno)
    )
    return turno
}
