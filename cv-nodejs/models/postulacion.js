const { Schema, model } = require('mongoose');

const PostulacionSchema = Schema({
    postulante: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    trabajo: {
        type: Schema.Types.ObjectId,
        ref: 'Trabajo',
        required: true
    },
    estado: {
        type: Boolean,
        //default: true
    },
});



PostulacionSchema.methods.toJSON = function () {
    const { __v, _id, ...data } = this.toObject();
    data.id = _id;
    return data;
}

module.exports = model('Postulacion', PostulacionSchema);
