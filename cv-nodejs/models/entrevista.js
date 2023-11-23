const { Schema, model } = require('mongoose');

const EntrevistaSchema = Schema({
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria'],
    },
    hora: {
        type: String,
        required: [true, 'La hora es obligatoria'],
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
    },
    resultado:{
        type: String,        
    },
    estado: {
        type: String,
        default: 'Pendiente'
    },
    postulacion: {
        type: Schema.Types.ObjectId,
        ref: 'Postulacion',
        required: true
    },
    personal:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});



EntrevistaSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model('Entrevista', EntrevistaSchema);
