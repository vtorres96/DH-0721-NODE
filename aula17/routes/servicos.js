let express = require('express')
let router = express.Router();

/* importando ServicosController */
let ServicosController = require('../controllers/ServicosController');

router.get('/', ServicosController.index);

router.get('/adicionar', ServicosController.cadastrar);
router.post('/adicionar', ServicosController.salvar);

module.exports = router;