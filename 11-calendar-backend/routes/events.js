const { Router } = require('express');
const router = Router();
const { getEventos, actualizarEvento, eliminarEvento, crearEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

// * Utilizar el middleware en todos, siempre y cuando se enecuentren debajo
router.use(validarJWT);

// * Obteniendo los eventos 
router.get('/',getEventos);

// * Creando los eventos 
router.post('/', crearEvento);

// * Actualizando los eventos 
router.put('/:id', actualizarEvento);

// * Eliminar los eventos 
router.delete('/:id', eliminarEvento);

module.exports = router; 