const { Schema, model } = require('mongoose');

const TrabajoSchema = Schema({
    cargo: {
        type: String,
        required: [true, 'El cargo es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria'],
    },
    responsabilidades: {
        type: Array,
        required: [true, 'Las responsabilidades son obligatorias'],
    },
    requisitos: {
        type: Array,
        required: [true, 'Los requisitos son obligatorios'],
    },
    lugar:{
        type: String,
        required: [true, 'El lugar es obligatorio'],
    },
    fecha: {
        type: Date,
        default:Date.now
    },
    fechaFin: {
        type: Date,
        required: [true, 'La fecha de fin es obligatoria'],
    },
    personal:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
});



TrabajoSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model('Trabajo', TrabajoSchema);
