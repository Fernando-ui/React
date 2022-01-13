const { Router } = require('express');
const router = Router();
const { getEventos, actualizarEvento, eliminarEvento, crearEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

// * Utilizar el middleware en todos, siempre y cuando se enecuentren debajo
router.use(validarJWT);

// * Obteniendo los eventos 
router.get('/',getEventos);

// * Creando los eventos 
router.post('/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate),
        check('end','Fecha de finalizacion es obligatoria').custom( isDate),
        validarCampos
    ],
    crearEvento
); 

// * Actualizando los eventos 
router.put('/:id', actualizarEvento);

// * Eliminar los eventos 
router.delete('/:id', eliminarEvento);

module.exports = router; 