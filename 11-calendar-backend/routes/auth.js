const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La constrasenia es obligatoria y debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
    
],loginUsuario);

router.post('/new', [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La contrasenia es obligatoria y debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
],crearUsuario );  

router.get('/renew', revalidarToken);  

module.exports = router;