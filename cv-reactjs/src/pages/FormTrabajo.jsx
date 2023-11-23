import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import {registerWork} from '../helpers/work'
export const FormTrabajo = () => {
    
    const [formData, setFormData] = useState({
        cargo: '',
        descripcion: '',
        responsabilidades: '',
        requisitos: '',
        lugar: '',
        fechaPublicacion: '',
        fechaVencimiento: '',
        estado: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'responsabilidades' || name === 'requisitos') {
           
            const arrayValue = value.split(',').map(item => item);
            setFormData({ ...formData, [name]: arrayValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e)  => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        const response = await registerWork(
            formData.cargo,
            formData.descripcion,
            formData.responsabilidades,
            formData.requisitos,
            formData.lugar,
            formData.fechaVencimiento
        );
        console.log(response);
    };
    const obtenerFechaActual = () => {
        const fechaActual = new Date();
        const mes = fechaActual.getMonth() + 1;
        const dia = fechaActual.getDate();
        const fechaFormato = `${fechaActual.getFullYear()}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
        return fechaFormato;
      };
    
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8">Formulario de Oportunidad Laboral</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">
                            Cargo
                        </label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="responsabilidades" className="block text-sm font-medium text-gray-700">
                            Responsabilidades
                        </label>
                        <textarea
                            id="responsabilidades"
                            name="responsabilidades"
                            value={formData.responsabilidades}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="requisitos" className="block text-sm font-medium text-gray-700">
                            Requisitos
                        </label>
                        <textarea
                            id="requisitos"
                            name="requisitos"
                            value={formData.requisitos}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
                            Lugar
                        </label>
                        <select
                            id="lugar"
                            name="lugar"
                            value={formData.lugar}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        >
                            <option value="" disabled>
                                Selecciona una ciudad
                            </option>
                            <option value="La Paz">La Paz</option>
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            {/* Agrega más ciudades según sea necesario */}
                        </select>
                    </div>
                    

                    <div className="mb-4">
                        <label htmlFor="fechaVencimiento" className="block text-sm font-medium text-gray-700">
                            Fecha de Vencimiento
                        </label>
                        <input
                            type="date"
                            id="fechaVencimiento"
                            name="fechaVencimiento"
                            min={obtenerFechaActual()}
                            value={formData.fechaVencimiento}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
