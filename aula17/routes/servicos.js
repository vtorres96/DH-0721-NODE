const express = require('express');

/* importando ServicosController */
const ServicosController = require('../controllers/ServicosController');

const router = express.Router();

router.get('/', ServicosController.index);

router.get('/adicionar', ServicosController.cadastrar);
router.post('/salvar', ServicosController.salvar);

module.exports = router;