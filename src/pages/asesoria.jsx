import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { llamarTurno } from '../api/logica';


function Asesoria() {
  const [showModal, setShowModal] = useState(false);
  const [turno, setTurno] = useState({});

  const handleLlamarTurno = () => {
    const turnollamado = llamarTurno()
    setTurno(turnollamado)
    setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-200 border border-black p-4 rounded-lg">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-lg font-semibold">Seleccionar Accion</p>
          <div className="flex items-center justify-center">
            <ArrowDownIcon className="h-8 w-8 text-gray-500 mt-6 cursor-pointer" />
          </div>
          <div className="flex gap-2 py-11">
            <button className="w-40 h-40 bg-green-500 text-white rounded-lg text-3xl hover:bg-green-600"
              onClick={handleLlamarTurno}>Llamar</button>
            <button className="w-40 h-40 bg-yellow-500 text-white rounded-lg text-3xl hover:bg-yellow-600">Llamar a turno perdido</button>

          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-gray-300 p-8 rounded-lg">
            <p className='flex text-lg font-bold'>Turno Llamado: {turno.numeroTurno} </p>
            <p>Nombre de Asesor: juan </p>
            <div className='flex gap-3'>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}>Atendido</button>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}>Volver a llamar</button>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}>No atendido</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Asesoria;

