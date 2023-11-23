import React, { useState } from 'react'
import { Navbar } from './components/Navbar';

export const FormEntrevista = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');

  const handleGuardarEntrevista = () => {
    // Aquí puedes agregar la lógica para guardar la entrevista
    console.log('Fecha:', fecha);
    console.log('Hora:', hora);
    console.log('Lugar:', lugar);
    // Puedes enviar estos datos a tu servidor o hacer lo que sea necesario
  };

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto mt-10 p-8 bg-white border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Registrar Entrevista</h2>

      <form onSubmit={(e) => { e.preventDefault(); handleGuardarEntrevista(); }}>
        <div className="mb-4">
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
            Hora
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
            Lugar
          </label>
          <input
            type="text"
            id="lugar"
            name="lugar"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-[#2a2a2a] text-white py-2 px-4 rounded-md"
        >
          Guardar Entrevista
        </button>
      </form>
    </div>
    </>
  );
};
