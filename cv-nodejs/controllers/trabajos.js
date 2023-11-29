const { response, request } = require('express');

const Trabajo = require('../models/trabajo');

const trabajoGet = async (req = request, res = response) => {
    
        const { id } = req.params;

        const trabajo = await Trabajo.findById(id);
    
        res.json(
            trabajo
        );
}



const trabajosGet = async (req = request, res = response) => {    

    const trabajos = await Trabajo.find();

    res.json({
        trabajos
    });
}



const trabajosPost = async (req, res = response) => {
    const { cargo, descripcion, responsabilidades, requisitos, lugar, fechaFin,personal } = req.body;
    const trabajo = new Trabajo({ cargo, descripcion, responsabilidades, requisitos, lugar, fechaFin,personal });

    // Guardar en BD
    await trabajo.save();

    res.json(trabajo);
}

module.exports={
    trabajoGet,
    trabajosGet,
    trabajosPost    
}