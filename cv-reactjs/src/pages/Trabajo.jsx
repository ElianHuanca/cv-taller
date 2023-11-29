import React from 'react';
import { Navbar } from './components/Navbar';
import { useEffectTrabajo } from '../hooks/useEffectTrabajo';
import { Link, useParams } from 'react-router-dom';
import { postPostulacion } from '../helpers/postPostulacion';
import { useSelector } from 'react-redux';

export const Trabajo = () => {
    const { id } = useSelector((state) => state.auth);
    const idTrabajo = useParams().id;
    const trabajo = useEffectTrabajo(idTrabajo);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
        return formattedDate;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();        
        const response = await postPostulacion(
            idTrabajo,
            id
        );        
        console.log(response);
    };

    return (
        <>
            <Navbar />
            {trabajo ? (
                <>
                    <div className="max-w-lg mx-auto bg-white p-8 border rounded-md shadow-md mt-10">
                        <h2 className="text-2xl font-bold mb-4">{trabajo.cargo}</h2>
                        <p className="text-gray-700 mb-4">{trabajo.descripcion}</p>

                        {trabajo.responsabilidades && (
                            <>
                                <h3 className="text-lg font-semibold mb-2">Responsabilidades:</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    {trabajo.responsabilidades.map((responsabilidad, index) => (
                                        <li key={index}>{responsabilidad}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {trabajo.requisitos && (
                            <>
                                <h3 className="text-lg font-semibold mb-2">Requisitos:</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    {trabajo.requisitos.map((requisito, index) => (
                                        <li key={index}>{requisito}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <p className="text-gray-700 mb-4">Lugar: {trabajo.lugar}</p>
                        <p className="text-gray-700 mb-4">Fecha de Publicación: {formatDate(trabajo.fecha)}</p>
                        <p className="text-gray-700 mb-4">Fecha de Vencimiento: {formatDate(trabajo.fechaFin)}</p>
                        <p className="text-gray-700 mb-4">Estado: {trabajo.estado ? 'Disponible' : 'Cerrado'}</p>

                        <Link to='/postulaciones'><button className="bg-[#2a2a2a] text-white py-2 px-4 rounded-md" onClick={handleSubmit}>Postular</button></Link>
                    </div>
                </>
            ) : (
                <p>Loading Trabajo...</p>
            )
            }
        </>
    );
};
