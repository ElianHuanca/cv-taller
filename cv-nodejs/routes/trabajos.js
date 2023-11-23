
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { trabajosGet,
        trabajosPost
} = require('../controllers/trabajos');

const router = Router();


router.get('/', trabajosGet );

router.post('/',[
    check('cargo', 'El cargo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('responsabilidades', 'Las responsabilidades son obligatorias').not().isEmpty(),
    check('requisitos', 'Los requisitos son obligatorios').not().isEmpty(),
    check('lugar', 'El lugar es obligatorio').not().isEmpty(),
    check('fechaFin', 'La fecha de Finalizacion es obligatoria').not().isEmpty(),    
    validarCampos
], trabajosPost );

module.exports = router;