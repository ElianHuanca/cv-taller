import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ListTrabajos = ({ oportunidades }) => {
    const { rol } = useSelector((state) => state.auth);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {oportunidades.map((oportunidad) => (
                <div key={oportunidad.id} className="mb-6 p-4 border rounded-md flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{oportunidad.cargo}</h2>
                    <div className="flex-grow">
                        <p className="text-gray-700 overflow-hidden max-h-20 mb-4">{oportunidad.descripcion}</p>
                    </div>
                    {rol == 'Postulante' ? (<Link to={`/trabajo/${oportunidad.id}`}> <button className="bg-[#2a2a2a] text-white py-2 px-3 rounded-md">
                        Postularme
                    </button></Link>)
                    : (<Link to={`/trabajo/${oportunidad.id}`}> <button className="bg-[#2a2a2a] text-white py-2 px-3 rounded-md">
                            Postularme
                        </button></Link>
                        )
                    }

                </div>
            ))}
        </div>
    );
};







