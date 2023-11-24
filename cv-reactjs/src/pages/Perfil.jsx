import React from 'react'
import { Navbar } from './components/Navbar';

export const Perfil = () => {
    const perfil = {
        ci: '9648312',
        correo: 'huancacori@gmail.com',
        nombre: 'Elian Huanca',
        celular: '76627246'
    }
    return (
        <>
            <Navbar />
            <div className='max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Perfil de Usuario</h2>
                <div className='mb-4'>
                    <label className='block text-gray-600 font-bold'>Carnet de Identidad:</label>
                    <p className='text-gray-800'>{perfil.ci}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-600 font-bold'>Correo:</label>
                    <p className='text-gray-800'>{perfil.correo}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-600 font-bold'>Nombre:</label>
                    <p className='text-gray-800'>{perfil.nombre}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-600 font-bold'>Celular:</label>
                    <p className='text-gray-800'>{perfil.celular}</p>
                </div>
            </div>
        </>
    );
}
