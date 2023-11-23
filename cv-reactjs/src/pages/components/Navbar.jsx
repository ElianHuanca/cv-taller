import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 text-red-500">
                    <img src='https://embol.com/small/embolHeaderIconDark.svg' alt="Logo" className="h-12 w-15" />
                </div>
                <div className="space-x-4 text-red-500">
                    <Link to="/principal" className=" hover:text-gray-300">Inicio</Link>
                    <Link to="/ofertas" className=" hover:text-gray-300">Ofertas Laborales</Link>
                    <Link to="/postulaciones" className=" hover:text-gray-300">Mis Postulaciones</Link>
                    <Link to="/entrevistas" className=" hover:text-gray-300">Mis Entrevistas</Link>
                    <Link to="/perfil" className=" hover:text-gray-300">Perfil</Link>
                    <button className=" hover:text-gray-300">Cerrar Sesión</button>
                </div>
            </div>
        </nav>
    )
}
