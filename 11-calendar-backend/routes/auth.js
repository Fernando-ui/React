const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

router.post('/',loginUsuario);
router.post('/new',
    [
        check('name','Debe de contener el nombre, es obligatorio').not().isEmpty()
    ],
 crearUsuario );  
router.get('/renew', revalidarToken);  

module.exports = router;