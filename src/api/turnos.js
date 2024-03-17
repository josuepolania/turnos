
const turnosPrioritario = []
const turnosBuenaGente = []
const turnosClienteNormal = []
let numeroTurno = 0
let turnosAtendidosBuenaGente = 0
let turnosAtendidosClienteNormal = 0
export function llamarTurno() {
    if(turnosPrioritario.length > 0) {
        console.log("atender prioritario")
    } else {
        console.log("no hay gente en el prioritario")
        if(turnosBuenaGente.length > 0) {
            console.log("atender buena gente")
            if (turnosAtendidosBuenaGente < 3) {
                console.log("los turnos atendios es menor a 3")
                console.log("Atender buena gente")
                turnosAtendidosBuenaGente = turnosAtendidosBuenaGente + 1
            } else {
                console.log("no los turnos son mayores")
                atenderGenteNormal()
            }
        } else {
            console.log("no hay gente en la fila buena gente")
            atenderGenteNormal()

        }
    }

} 

function atenderGenteNormal() {
    if(turnosClienteNormal.length > 0) {
        console.log("si hay gente en turno cliente normal")
        console.log("atender gente cliente normal")
        if(turnosAtendidosClienteNormal >= 2) {
            console.log("si el contador de cliente normal es mayor o igual a 2")
            turnosAtendidosBuenaGente = 0
            turnosAtendidosClienteNormal = 0

        } else {
            console.log("no es contador cliente normal no es mayor o igual a 2")
            turnosAtendidosClienteNormal = turnosAtendidosClienteNormal + 1
            
        }

    } else {
        console.log("no hay gente en turno cliente normal")
        console.log("atender personas en turno buena gente")
    }
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
