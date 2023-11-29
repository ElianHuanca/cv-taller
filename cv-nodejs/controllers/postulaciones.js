const { response, request } = require('express');

const Postulacion = require('../models/postulacion');

/* const postulantesByTrab = async (req = request, res = response) => {
    
        const { id } = req.params;

        const trabajo = await Postulacion.findById(id);
    
        res.json(
            trabajo
        );
} */

const postulacionesGet = async (req, res) => {
    try {
        const { id } = req.params;

        const postulaciones = await Postulacion.find({ postulante: id })
            .populate('trabajo');  // Poblar el campo 'trabajo' con los datos del trabajo

        res.json(postulaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las postulaciones' });
    }
};

// Resto del código...


const postulacionPost = async (req, res = response) => {
    
    const { postulante, trabajo } = req.body;

    const registrado= await Postulacion.findOne({ postulante, trabajo });
    if (registrado) {
        return res.status(400).json({
            msg: 'Ya se encuentra registrado en este trabajo'
        });
    }
    const postulacion = new Postulacion({ postulante, trabajo });

    // Guardar en BD
    await postulacion.save();

    res.json(postulacion);
}



module.exports = {
    postulacionesGet,
    postulacionPost
}