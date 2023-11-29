const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const { uploadFileToS3 } = require('./s3');
const Usuario = require('../models/usuario');
const { correoExiste } = require('../helpers/db-validators');



const usuariosGet = async (req = request, res = response) => {

    const query = { estado: true };

    const usuarios = await Usuario.find(query);

    res.json({
        usuarios
    });
}

const usuarioGet = async (req = request, res = response) => {
    
        const { id } = req.params;
    
        const usuario = await Usuario.findById(id);
    
        res.json(
            usuario
        );
}

const postulantesGet = async (req = request, res = response) => {

    const query = { rol: 'Postulante' };

    const usuarios = await Usuario.find(query);

    res.json({
        usuarios
    });

}

const personalGet = async (req = request, res = response) => {

    const query = { rol: 'Personal' };

    const usuarios = await Usuario.find(query);

    res.json({
        usuarios
    });
}

const usuariosPost = async (req, res = response) => {
    try {
        
        const { nombre, correo, celular, password } = req.body;

        var rol;
        var cv;
        
        if (!req.file) {
            //return res.status(400).json({ message: 'No se proporcionó un archivo' });
            rol = 'Personal';
        } else {
            const fileBuffer = req.file.buffer;
            const fileName = req.file.originalname;
            cv = await uploadFileToS3(fileName, fileBuffer);
            rol = 'Postulante';
        }

        const user= await Usuario.findOne({ correo });
        if (user) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        const usuario = new Usuario({ nombre, correo, cv, celular, password, rol });
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        // Guardar en BD
        await usuario.save();

        res.json(usuario);

    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, password, ...resto } = req.body;

    if (password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json(usuario);
}

const usuariosDelete = async (req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json(usuario);
}




module.exports = {
    usuariosGet,
    postulantesGet,
    personalGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuarioGet
}