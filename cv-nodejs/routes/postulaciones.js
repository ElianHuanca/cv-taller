const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { postulacionesGet,
    postulacionPost
} = require('../controllers/postulaciones');

const router = Router();

router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], postulacionesGet);

router.post('/', /* [
    check('trabajo', 'No es un ID válido').isMongoId(),
    check('postulante', 'No es un ID válido').isMongoId(),
    validarCampos
], */ postulacionPost);

module.exports = router;