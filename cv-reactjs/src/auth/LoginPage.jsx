import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginNodeJs } from '../store/auth/thunks';
export const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuthenticating = false;
    const { correo, password, onInputChange } = useForm({
        correo: "",
        password: ""
    });

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginNodeJs({ correo, password }));
    };

    
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src='https://nuevaeconomia.com.bo/sitioweb/img/noticias/Embol-empresa-mayor-reputacion.png' alt="/" />

            <div className='flex justify-center items-center h-full'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-8 backdrop-filter backdrop-blur-md' onSubmit={onSubmit}>
                    <h2 className='text-4xl font-bold text-center py-4'>EMBOL.</h2>
                    <div className='flex flex-col mb-4'>
                        <label>correo</label>
                        <input className='border relative bg-gray-100 p-2' type="text" value={correo} onChange={onInputChange} name="correo" required/>
                    </div>
                    <div className='flex flex-col'>
                        <label>contraseña</label>
                        <input className='border relative bg-gray-100 p-2' type="password" value={password} onChange={onInputChange} name="password" required />
                    </div>
                    <button disabled={isAuthenticating} className='w-full py-3 mt-8 bg-red-600 hover:bg-red-500 relative text-white' type='submit'>Ingresar</button>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Recordar</p>
                    <Link to="/auth/register"><p className='text-center mt-8'>No estas registrado?  <b>registrate ahora</b></p></Link>
                </form>
            </div>
        </div>
    );
}