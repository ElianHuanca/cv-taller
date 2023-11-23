import React from 'react';
import { Navbar } from './components/Navbar';

export const Trabajo = () => {
    const oportunidad = [
        {
            id: 1,
            cargo: 'Prevendedor Mayorista',
            descripcion:
                'Garantizar la atención de pre-venta de todos los clientes en las rutas asignadas, ejecutando el plan de visitas y frecuencias determinados.',
            responsabilidades: [
                'Garantizar el volumen de ventas asignado a su portafolio de clientes acordado en el BP de su ruta y mercado',
                'Visitar y gestionar pedidos a todos los clientes asignados a su ruta del día.',
            ],
            requisitos: [
                'Bachillerato, concluido',
                'Licenciatura en Marketing, Ing. Comercial, Ing. Industrial, Adm de Empresas, concluido',
                'Diplomado en Gestión de Ventas, área Comercial, concluido',
            ],
            lugar: 'Oruro',
            fechaPublicacion: '2023-11-20',
            fechaVencimiento: '2023-12-10',
            estado: 'Activo',
        },
    ];

    // Accede a los datos de la oportunidad usando oportunidad[0]
    const datosOportunidad = oportunidad[0];

    return (
        <>
            <Navbar />
            <div className="max-w-lg mx-auto bg-white p-8 border rounded-md shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-4">{datosOportunidad.cargo}</h2>
                <p className="text-gray-700 mb-4">{datosOportunidad.descripcion}</p>

                <h3 className="text-lg font-semibold mb-2">Responsabilidades:</h3>
                <ul className="list-disc pl-5 mb-4">
                    {datosOportunidad.responsabilidades.map((responsabilidad, index) => (
                        <li key={index}>{responsabilidad}</li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold mb-2">Requisitos:</h3>
                <ul className="list-disc pl-5 mb-4">
                    {datosOportunidad.requisitos.map((requisito, index) => (
                        <li key={index}>{requisito}</li>
                    ))}
                </ul>

                <p className="text-gray-700 mb-4">Lugar: {datosOportunidad.lugar}</p>
                <p className="text-gray-700 mb-4">Fecha de Publicación: {datosOportunidad.fechaPublicacion}</p>
                <p className="text-gray-700 mb-4">Fecha de Vencimiento: {datosOportunidad.fechaVencimiento}</p>
                <p className="text-gray-700 mb-4">Estado: {datosOportunidad.estado}</p>

                <button className="bg-[#2a2a2a] text-white py-2 px-4 rounded-md">Postular</button>
            </div>
        </>
    );
};
