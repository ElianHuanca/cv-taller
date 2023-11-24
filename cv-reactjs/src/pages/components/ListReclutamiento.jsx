import React from 'react'

export const ListReclutamiento = () => {
    const steps = [
        {
            id: 1,
            title: 'Postula a la vacante en:',
            description: 'Revisa las vacantes disponibles y si cumples con el perfil ¡postula! Debes saber que este es el único medio habilitado para que puedas postular.',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/ee64d626-1099-43d2-92ed-0128b469ff9d.png',
        },
        {
            id: 2,
            title: 'Crea tu perfil en nuestra plataforma de empleos',
            description: 'Completa tu información personal y profesional en la plataforma.',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/af35f148-d8e9-4b70-8c51-011ee7bea4b7.png',
        },
        {
            id: 3,
            title: 'Envia Tu CV y Postulate',
            description: 'No te tomará mucho tiempo ¡Anímate!',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/f4e22f90-a653-41d0-8e83-30c55b023d3e.jpeg',
        },
        {
            id: 4,
            title: 'Entrevista con EMBOL',
            description: 'Si cumples con los requisitos de los pasos anteriores, nos pondremos en contacto contigo para agendar una entrevista.',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/9666f1d0-b072-43e9-aa04-e80a88515579.png',
        },
        {
            id: 5,
            title: 'Comunicación de avances',
            description: 'Nos comunicaremos para darte un informe de tu participación vía email o celular. ¡Estate atento!',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/a52e257d-007e-463a-b63e-e220c9ca5fc5.png',
        },
        {
            id: 6,
            title: 'Confirmación de la selección ',
            description: 'Una vez realizados todos los pasos, te anunciaremos la decisión del comité evaluador.',
            imageUrl: 'https://embolfiles01.s3.us-east-2.amazonaws.com/58a6e267-0040-463c-b91d-971dea040d66.png',
        },
        // Agrega más pasos según sea necesario
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Lista de Pasos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="bg-white rounded-lg p-4 shadow-md text-center">
                        <img
                            src={step.imageUrl}
                            alt={`Paso ${step.id}`}
                            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                        />
                        <h2 className="text-lg font-bold mb-2 text-red-500">{step.id}# {step.title}</h2>
                        <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
