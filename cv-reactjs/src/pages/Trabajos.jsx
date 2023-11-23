import React from 'react'
import { Navbar } from './components/Navbar'
import { ListTrabajos } from './components/ListTrabajos';
import { Link } from 'react-router-dom';
import { getWorks} from '../helpers/work'
import { useState ,useEffect } from 'react';

export const Trabajos = () => {
    const [oportunidades, setOportunidades] = useState([]);
    // const oportunidades = [
    //     {
    //         id: 1,
    //         cargo: 'Prevendedor Mayorista',
    //         descripcion: 'Garantizar la atención de pre-venta de todos los clientes en las rutas asignadas, ejecutando el plan de visitas y frecuencias determinados.',
    //         responsabilidades: ['Garantizar el volumen de ventas asignado a su portafolio de clientes acordado en el BP de su ruta y mercado', 'Visitar y gestionar pedidos a todos los clientes asignados a su ruta del día.'],
    //         requisitos: ['Bachillerato, concluido', 'Licenciatura en Marketing, Ing. Comercial, Ing. Industrial, Adm de Empresas, concluido', 'Diplomado en Gestión de Ventas, área Comercial, concluido'],
    //         lugar: 'Oruro',
    //         fechaPublicacion: '2023-11-20',
    //         fechaVencimiento: '2023-12-10',
    //         estado: 'Activo',
    //     },
    //     {
    //         id: 2,
    //         cargo: 'Prevendedor',
    //         descripcion: 'Administrar y asesorar a los clientes, según frecuencia asignada, para garantizar el cumplimiento de su presupuesto de ventas por subcategorías y FDE.',
    //         responsabilidades: ['Garantizar el volumen de ventas asignado a su cartera de clientes, con disponibilidad de todo el portafolio definidos por tipo de cliente.', 'Cumplir con los clientes asignados para la visita, cumpliendo rutinas y protocolos de ventas.', 'Implementar los aceleradores y ejecutar la foto de éxito en el punto de venta.'],
    //         requisitos: ['Bachillerato, concluido', 'Licenciatura en Marketing, Ing. Comercial, Ing. Industrial, Adm de Empresas, concluido', 'Diplomado en Gestión de Ventas, área Comercial, concluido'],
    //         lugar: 'Cochabamba',
    //         fechaPublicacion: '2023-11-20',
    //         fechaVencimiento: '2023-12-10',
    //         estado: 'Activo',
    //     },
    //     {
    //         id: 3,
    //         cargo: 'Ingeniero de Procesos',
    //         descripcion: 'Garantizar el cumplimiento del plan de producción, entregando las cantidades requeridas de jarabes, aguas y equipos auxiliares, mediante la gestión de la solicitud de requerimientos de insumos de producción presentada por cada línea, a fin de alcanzar las metas de producción establecidas',
    //         responsabilidades: ['Priorizar las actividades de saneamiento de los equipos de producción de las líneas y Tanques de preparación de jarabes', 'Optimizar el uso de materias primas e insumos', 'Asegurar la eficiencia en el cumplimiento de los procesos y actividades establecidas por el departamento de Seguridad, Calidad y Medio ambiente'],
    //         requisitos: ['Bachillerato, concluido', 'Técnico superior en química industrial, Ing. Química, Ing. Industrial, Ing. Procesos o ramas afines, concluido', 'Experiencia en Producción, Procesos, 2 años'],
    //         lugar: 'La Paz',
    //         fechaPublicacion: '2023-11-20',
    //         fechaVencimiento: '2023-12-10',
    //         estado: 'Activo',
    //     },
    //     {
    //         id: 4,
    //         cargo: 'Ingeniero de Mantenimiento',
    //         descripcion: 'Dar soporte a la implementación de sistemas, procesos y políticas internas para garantizar la confiabilidad de los equipos y sistemas industriales, dentro de procesos seguros con las personas, cuidando la calidad de los productos y la eficiencia del equipamiento y sistemas asociados.',
    //         responsabilidades: ['Desarrollar la aplicación de planes y estándares propios del equipamiento de planta.', 'Brindar apoyo a las áreas operativas por medio de asesoramiento en gestión temprana de equipos.', 'Realizar seguimiento a los indicadores de gestión del área y cumplir con el programa de Gestión y Optimización de Plantas.'],
    //         requisitos: ['Bachillerato, concluido', 'Lic. en ing. mecánico, electrónico, mecatrónico o ramas afines., concluido', 'Diplomado en mantenimiento, concluido (deseable)', 'Experiencia en Mantenimiento de equipos industriales, 2 años'],
    //         lugar: 'Santa Cruz',
    //         fechaPublicacion: '2023-11-20',
    //         fechaVencimiento: '2023-12-10',
    //         estado: 'Activo',
    //     },
    // ];
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getWorks();
            setOportunidades(data.trabajos || []);
          } catch (error) {
            console.error('Error Obteniendo Los datos:', error);
          }
        };
    
        fetchData();
      }, []);
    
    
      return (
        <>
          <Navbar />
          <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Oportunidades Laborales</h1>
            <Link to='/crearTrabajo'>
                    <button className="mt-4 bg-[#2a2a2a] text-white py-2 px-4 rounded-md mb-6">
                        Crear Oportunidad Laboral
                    </button>
                </Link>
                <ListTrabajos oportunidades={oportunidades} />
          </div>
        </>
      );
}
