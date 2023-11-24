import React from 'react'
import { Navbar } from './components/Navbar'
import { Link } from 'react-router-dom'
import { ListReclutamiento } from './components/ListReclutamiento'



export const Principal = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative h-screen">
        <img
          src="https://embolfiles01.s3.us-east-2.amazonaws.com/a2ccb508-c054-4e08-b088-e5f2e36f2675.png"
          alt="Descripción de la imagen"
          className="w-full h-4/5 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold mb-4">¡Destapa oportunidades!</h1>
          <p className="text-lg">Impulsamos el talento de nuestro equipo y buscamos la excelencia en cada paso que damos.</p>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Proceso De Reclutamiento</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">¡Destapa oportunidades!</h2>
          <h3 className="text-lg">
            Anímate a vivir la experiencia Embol y descubre las oportunidades que tenemos para ti. Ingresa a nuestro portal de empleos: {' '}
            <a
              href="http://localhost:5173/auth/login"
              //target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              embol.evaluar.com
            </a>
          </h3>
        </div>
      </div>
      <ListReclutamiento />
    </>
  )
}
