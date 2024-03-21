import React, { useState, useEffect } from 'react';
import { obtenerTurnosLlamados } from "../api/logica";

function Pantalla() {
    const [turnosLlamados, setTurnosLlamados] = useState([]);
    useEffect(() => {
        const obtenerTurnos = obtenerTurnosLlamados()
        setTurnosLlamados(obtenerTurnos)
    }, [])

    return (
        <div className="p-4 flex flex-col justify-center items-center gap-4 py-10">
            <p
                className="mt-20 w-100 border border-black p-4 rounded-lg font-bold text-center z-10 text-blue-700 text-2xl">
                Le agradecemos su paciencia. Su atención será brindada en breve."⏳
            </p>
            <div className="bg-gray-300 w-full p-4 rounded-lg relative z-0 mt-8">
                <ul className="divide-y divide-gray-300">
                    {turnosLlamados.map((item, index) => (
                        <li key={index} className="text-lg py-2">
                            <div className='bg-green-500 rounded-lg p-4'>
                                <p className='font-bold'>Numero de turno: {item.numeroTurno}</p>
                                <p>Estado: {item.estado} </p>
                                <p>Asesor: {item.asesor}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Pantalla;

