const { response, request } = require('express');

const Trabajo = require('../models/trabajo');

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
    trabajosGet,
    trabajosPost    
}