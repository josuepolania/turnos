import React, { useState, useEffect } from 'react';
import { calcularTiempoPromedio } from "../api/logica";

function Reportes() {
    const [tiempoPromedio, setTiempoPromedio] = useState({
        prioritario: 0,
        buenaGente: 0,
        clienteNormal: 0
    });

    useEffect(() => {
        const promedios = calcularTiempoPromedio();
        setTiempoPromedio(promedios);
    }, []);


    return (
        <div className="flex flex-wrap justify-center items-center h-screen gap-4 py-10">
            <div className="m-4 p-6 border rounded-lg">
                <h2 className="text-lg font-semibold">Turno Prioritario</h2>
                <p>Tiempo promedio de atención:</p>               
                <p className="mt-4">{tiempoPromedio.prioritario} Minutos</p> 
            </div>
            <div className="m-4 p-6 border rounded-lg">
                <h2 className="text-lg font-semibold">Turno Cliente Buena Gente</h2>
                <p>Tiempo promedio de atención:</p>
                <p className="mt-4">{tiempoPromedio.buenaGente} Minutos</p> 
            </div>
            <div className="m-4 p-6 border rounded-lg">
                <h2 className="text-lg font-semibold">Turno Cliente Normal</h2>
                <p>Tiempo promedio de atención:</p>
                <p className="mt-4">{tiempoPromedio.clienteNormal} Minutos</p> 
            </div>
        </div>
    );
}

export default Reportes;
