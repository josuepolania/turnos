
import {
    agregarFinalCola,
    agregarInicioCola,
    removerPrimerTurno,
    getTurnos,
    setTurnos,
    getNumeroTurno,
    reinicioDiario
} from './storage'

reinicioDiario()

let turnosAtendidosBuenaGente = 0
let turnosAtendidosClienteNormal = 0
const asesores = ["Asesor 1", "Asesor 2", "Asesor 3", "Asesor 4"]

function obtenerAsesor() {
    let asesor = asesores[Math.floor(Math.random() * asesores.length)]
    return asesor
}

export function calcularDuracionTurno(turno) {
    turno.horaInicio = new Date(turno.horaInicio);
    turno.horaFin = new Date(turno.horaFin);
    const duracionTurno = (turno.horaFin.getTime() - turno.horaInicio.getTime()) / (1000 * 60);
    return duracionTurno;
}

export function calcularTiempoPromedio() {
    const categorias = ['prioritario', 'buenaGente', 'clienteNormal'];
    const promediosPorCategoria = {};
    const turnosLlamados = getTurnos('turnosLlamados');
    categorias.forEach(categoria => {
        const turnosCategoria = turnosLlamados.filter(turno => turno.tipo === categoria && turno.estado === 'TERMINADO');
        const duraciones = turnosCategoria.map(turno => calcularDuracionTurno(turno));
        const tiempoPromedio = duraciones.reduce((total, duracion) => total + duracion, 0) / duraciones.length || 0;
        promediosPorCategoria[categoria] = tiempoPromedio.toFixed(2);
    });
    return promediosPorCategoria;
}


export function buscarTurnoPerdido(buscarNumeroTurno) {
    let turno = {
        numeroTurno: "No hay Turnos en Cola"
    }
    console.log("buscar", buscarNumeroTurno)
    const turnosLlamados = getTurnos('turnosLlamados');
    const encontrado = turnosLlamados.find(turnosLlamado => turnosLlamado.numeroTurno == buscarNumeroTurno)
    if (encontrado) {
        return encontrado
    } else {
        return turno
    }
}

export function cambiarEstado(turno, estado) {
    if (turno.numeroTurno != "No  hay turno en cola") {
        const turnosLlamados = getTurnos('turnosLlamados')
        turnosLlamados.forEach((turnoLlamado) => {
            if (turnoLlamado.numeroTurno == turno.numeroTurno) {
                turnoLlamado.estado = estado
                if (estado == "TERMINADO") {
                    turnoLlamado.horaFin = new Date();
                }
            }
        })
        setTurnos('turnosLlamados', turnosLlamados)
    }
}

export function volverAllamarTurnoPerdido(turno) {
    if (turno.numeroTurno != "No hay Turnos en Cola") {
        turno.estado = "VUELTO A LLAMAR"
        agregarInicioCola('turnosLlamados', turno)
    }
}

export function obtenerTurnosLlamados() {
    return getTurnos('turnosLlamados')
}

export function llamarTurno() {
    let turno = {
        numeroTurno: "No hay Turnos en Cola",
        estado: "sin estado",
    }
    if (getTurnos('turnosPrioritario').length > 0) {
        console.log("atender prioritario")
        turno = removerPrimerTurno('turnosPrioritario')
        turno.asesor = obtenerAsesor()
        turno.estado = "LLAMADO"
        agregarInicioCola('turnosLlamados', turno)

    } else {
        console.log("no hay gente en el prioritario")
        if (getTurnos("turnosBuenaGente").length > 0) {
            console.log("atender buena gente")
            if (turnosAtendidosBuenaGente < 3 || getTurnos("turnosClienteNormal").length == 0) {
                console.log("los turnos atendios es menor a 3")
                console.log("Atender buena gente")
                turno = removerPrimerTurno('turnosBuenaGente')
                turno.asesor = obtenerAsesor()
                turno.estado = "LLAMADO"
                agregarInicioCola('turnosLlamados', turno)
                turnosAtendidosBuenaGente = turnosAtendidosBuenaGente + 1
            } else {
                console.log("no los turnos son mayores")
                turno = atenderGenteNormal(turno)
            }
        } else {
            console.log("no hay gente en la fila buena gente")
            turno = atenderGenteNormal(turno)
        }
    }

    return turno
}

function atenderGenteNormal(turno) {

    if (getTurnos("turnosClienteNormal").length > 0) {
        console.log("si hay gente en turno cliente normal")
        if (turnosAtendidosClienteNormal < 2) {
            console.log("si el contador de cliente normal es menor a 2")
            console.log("atender gente cliente normal")
            turno = removerPrimerTurno("turnosClienteNormal")
            turno.asesor = obtenerAsesor()
            turno.estado = "LLAMADO"
            agregarInicioCola("turnosLlamados", turno)
            turnosAtendidosClienteNormal = turnosAtendidosClienteNormal + 1
        } else {
            if (getTurnos("turnosBuenaGente").length > 0) {
                turno = removerPrimerTurno("turnosBuenaGente")
                turno.asesor = obtenerAsesor()
                turno.estado = "LLAMADO"
                agregarInicioCola("turnosLlamados", turno)
                turnosAtendidosBuenaGente = 1
                turnosAtendidosClienteNormal = 0
            } else {
                turnosAtendidosClienteNormal = turnosAtendidosClienteNormal + 1
                turno = removerPrimerTurno("turnosClienteNormal")
                turno.asesor = obtenerAsesor()
                turno.estado = "LLAMADO"
                agregarInicioCola("turnosLlamados", turno)
            }
        }

    } else {
        console.log("no hay gente en turno cliente normal")
    }

    return turno
}

export function pedirTurno(tipo) {
    const numeroTurno = getNumeroTurno()
    const turno = {
        numeroTurno: numeroTurno,
        horaInicio: new Date(),
        tipo: tipo
    }
    if (tipo == "prioritario") (
        agregarFinalCola('turnosPrioritario', turno)
    )
    if (tipo == "buenaGente") (
        agregarFinalCola('turnosBuenaGente', turno)
    )
    if (tipo == "clienteNormal") (
        agregarFinalCola('turnosClienteNormal', turno)
    )

    return turno
}



