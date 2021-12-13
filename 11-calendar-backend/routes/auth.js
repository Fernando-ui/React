const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

router.post('/',loginUsuario);
router.post('/new', crearUsuario );  
router.get('/renew', revalidarToken);  

module.exports = router;