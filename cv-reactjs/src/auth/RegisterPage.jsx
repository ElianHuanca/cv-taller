import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startCreatingUserNodeJs } from '../store/auth/thunks';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const isAuthenticating = false;
  const { ci,nombre,celular,correo, password, onInputChange } = useForm({
    ci:"",
    correo: "",
    nombre: "",
    password: "",
    celular: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("correo", correo);
    formData.append("password", password);
    formData.append("cv", event.target.files[0]);

    dispatch(startCreatingUserNodeJs({ nombre, password }));
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src='https://nuevaeconomia.com.bo/sitioweb/img/noticias/Embol-empresa-mayor-reputacion.png' alt="/" />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[300px] w-full mx-auto bg-white p-6 backdrop-filter backdrop-blur-md' onSubmit={onSubmit}>
          <h2 className='text-2xl font-bold text-center mb-4'>EMBOL.</h2>
          <div className='mb-4'>
            <label>Carnet De Identidad</label>
            <input className='border w-full p-2' type="text" value={ci} onChange={onInputChange} name="ci" required />
          </div>
          <div className='mb-4'>
            <label>Nombre Completo</label>
            <input className='border w-full p-2' type="text" value={nombre} onChange={onInputChange} name="nombre" required />
          </div>
          <div className='mb-4'>
            <label>Correo</label>
            <input className='border w-full p-2' type="text" value={correo} onChange={onInputChange} name="correo" required />
          </div>
          <div className='mb-4'>
            <label>Contraseña</label>
            <input className='border w-full p-2' type="password" value={password} onChange={onInputChange} name="password" required />
          </div>
          <div className='mb-4'>
            <label>Envie su CV</label>
            <input className='border w-full p-2' type="file" name="cv" required />
          </div>
          <div className='mb-4'>
            <label>Nro De Celular</label>
            <input className='border w-full p-2' type="text" value={celular} onChange={onInputChange} name="celular" required />
          </div>
          <button disabled={isAuthenticating} className='w-full py-3 mt-4 bg-red-600 hover:bg-red-500 text-white' type='submit'>Registrate</button>
          <Link to="/auth/login" className='text-center mt-4 block text-sm'>Ya estás registrado? <b>Ingresa ahora</b></Link>
        </form>
      </div>
    </div>
  );

}