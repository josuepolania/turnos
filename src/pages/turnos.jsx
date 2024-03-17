import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { pedirTurno } from '../api/logica';
import { Link } from 'react-router-dom'

function Turnos() {
  const [showModal, setShowModal] = useState(false);
  const [turno, setTurno] = useState({});

  // Función para mostrar el modal al darle click al botón 
  const handleTurnoClick = (tipo) => {
    const turno = pedirTurno(tipo)
    setTurno(turno)
    setShowModal(true);
  };

  // Función para cerrar el modal al darle click
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-200 border border-black p-4 rounded-lg">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-lg font-semibold">Seleccionar categoría</p>
          <div className="flex items-center justify-center">
            <ArrowDownIcon className="h-8 w-8 text-gray-500 mt-6 cursor-pointer" />
          </div>
          <div className="flex gap-2 py-11">
            <button className="w-40 h-40 bg-blue-500 text-white rounded-lg text-3xl hover:bg-blue-600"
              onClick={() => handleTurnoClick("prioritario")}>Prioritario</button>
            <button className="w-40 h-40 bg-green-500 text-white rounded-lg text-3xl hover:bg-green-600"
              onClick={() => handleTurnoClick("buenaGente")}>Buena Gente</button>
            <button className="w-40 h-40 bg-gray-500 text-white rounded-lg text-3xl hover:bg-gray-600"
              onClick={() => handleTurnoClick("clienteNormal")}>Cliente normal</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-gray-300 p-8 rounded-lg">
            <p className='flex text-lg font-bold'>Numero: {turno.numeroTurno} </p>
            <p>Categoria: {turno.tipo} </p>
            <p>Fecha: {turno.fechaSolitud.toString()} </p>
            <div className='flex gap-3'>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}>Cerrar</button>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}>Imprimir</button>
              <Link to='/pantalla'>
                <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                >Ir a pantalla de turnos</button>
              </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Turnos;
