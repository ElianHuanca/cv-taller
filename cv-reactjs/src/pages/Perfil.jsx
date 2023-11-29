import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar';
import { getUsuario } from '../helpers/getUsuario';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Perfil = () => {

    /* const perfil = {
        ci: '9648312',
        correo: 'huancacori@gmail.com',
        nombre: 'Elian Huanca',
        celular: '76627246'
    } */
    const [perfil, setPerfil] = useState();
    const { id } = useSelector((state) => state.auth);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsuario(id);
                console.log(data);
                setPerfil(data);
            } catch (error) {
                console.error('Error Obteniendo Los datos:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className='max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Perfil de Usuario</h2>
                {perfil ? (
                    <>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                <label className="block text-gray-600 font-bold">Correo:</label>
                                <p className="text-gray-800">{perfil.correo}</p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                <label className="block text-gray-600 font-bold">Nombre:</label>
                                <p className="text-gray-800">{perfil.nombre}</p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                <label className="block text-gray-600 font-bold">Celular:</label>
                                <p className="text-gray-800">{perfil.celular}</p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                <label className="block text-gray-600 font-bold">Rol:</label>
                                <p className="text-gray-800">{perfil.rol}</p>
                            </div>
                            { perfil.rol === 'Postulante' && (
                                <div className="w-full lg:w-1/2 px-4 mb-4">
                                    <label className="block text-gray-600 font-bold">CV:</label>
                                    <a href={perfil.cv} target="_blank" rel="noopener noreferrer">
                                        <img src="https://play-lh.googleusercontent.com/A0l4u4V9D7lSAsnk56nMbTS6d0hMA4JQVDwSXfD5UOTqJ98qIpdGQsrtJaCXzwwkyWw" className="w-16 h-16" alt="Icono de CV" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <p>Loading perfil...</p>
                )}
            </div>
        </>
    );
}
