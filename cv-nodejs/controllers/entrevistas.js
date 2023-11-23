const { response, request } = require('express');

const Entrevista = require('../models/entrevista');
const Trabajo = require('../models/trabajo');

const entrevistasGet = async (req = request, res = response) => {
    const entrevistas = await Entrevista.find();
    res.json({
        entrevistas
    });
}

const entrevistasPost = async (req, res = response) => {
    const { fecha,hora,direccion,personal,postulacion } = req.body;
    const entrevista = new Entrevista({ fecha,hora,direccion,personal,postulacion });

    // Guardar en BD
    await entrevista.save();

    res.json(entrevista);
}

const entrevistasPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;    

    const entrevista = await Entrevista.findByIdAndUpdate(id, resto);
    //const trabajo= await Trabajo.findById(resto.trabajo);
    res.json(entrevista);
}

module.exports={
    entrevistasGet,
    entrevistasPost,
    entrevistasPut
}