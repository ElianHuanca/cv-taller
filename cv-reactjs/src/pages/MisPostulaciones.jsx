import React from 'react'
import { Navbar } from './components/Navbar'
import { ListPostulaciones } from './components/ListPostulaciones';

export const MisPostulaciones = () => {
    
    const oportunidades = [
        {
            id: 1,
            cargo: 'Prevendedor Mayorista',
            descripcion: 'Garantizar la atención de pre-venta de todos los clientes en las rutas asignadas, ejecutando el plan de visitas y frecuencias determinados.',
            responsabilidades: ['Garantizar el volumen de ventas asignado a su portafolio de clientes acordado en el BP de su ruta y mercado', 'Visitar y gestionar pedidos a todos los clientes asignados a su ruta del día.'],
            requisitos: ['Bachillerato, concluido', 'Licenciatura en Marketing, Ing. Comercial, Ing. Industrial, Adm de Empresas, concluido', 'Diplomado en Gestión de Ventas, área Comercial, concluido'],
            lugar: 'Oruro',
            fechaPublicacion: '2023-11-20',
            fechaVencimiento: '2023-12-10',
            estado: 'Activo',
        },
        {
            id: 2,
            cargo: 'Prevendedor',
            descripcion: 'Administrar y asesorar a los clientes, según frecuencia asignada, para garantizar el cumplimiento de su presupuesto de ventas por subcategorías y FDE.',
            responsabilidades: ['Garantizar el volumen de ventas asignado a su cartera de clientes, con disponibilidad de todo el portafolio definidos por tipo de cliente.', 'Cumplir con los clientes asignados para la visita, cumpliendo rutinas y protocolos de ventas.', 'Implementar los aceleradores y ejecutar la foto de éxito en el punto de venta.'],
            requisitos: ['Bachillerato, concluido', 'Licenciatura en Marketing, Ing. Comercial, Ing. Industrial, Adm de Empresas, concluido', 'Diplomado en Gestión de Ventas, área Comercial, concluido'],
            lugar: 'Cochabamba',
            fechaPublicacion: '2023-11-20',
            fechaVencimiento: '2023-12-10',
            estado: 'Activo',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8">Mis Postulaciones</h1>
                
                <ListPostulaciones oportunidades={oportunidades} />
            </div>
        </>
    );
}
