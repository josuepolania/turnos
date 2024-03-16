import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';

function Turnos() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-200 border border-black p-4 rounded-lg">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-lg font-semibold">Seleccionar categoría</p>
          <div className="flex items-center justify-center">
            <ArrowDownIcon className="h-8 w-8 text-gray-500 mt-6 " />
          </div>
          <div className="flex gap-2 py-11">
            <button className="w-40 h-40 bg-blue-500 text-white rounded-lg text-3xl hover:bg-blue-600">Prioritario</button>
            <button className="w-40 h-40 bg-green-500 text-white rounded-lg text-3xl hover:bg-green-600">Buena Gente</button>
            <button className="w-40 h-40 bg-gray-500 text-white rounded-lg text-3xl hover:bg-gray-600">Cliente normal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turnos;

