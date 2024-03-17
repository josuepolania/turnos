import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { llamarTurno } from '../api/turnos';

function Asesoria() {
  const [showModal, setShowModal] = useState(false);
  
  const handleLlamarTurno = () => {
    llamarTurno()  
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
            <button className="w-40 h-40 bg-yellow-500 text-white rounded-lg text-3xl hover:bg-yellow-600">No Atendido</button>
            <button className="w-40 h-40 bg-red-500 text-white rounded-lg text-3xl hover:bg-red-600">Terminado</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p>Turno Llamado:</p>
            <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2" 
            onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Asesoria;