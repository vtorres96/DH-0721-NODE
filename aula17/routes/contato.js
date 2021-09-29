let express = require('express')
let router = express.Router();

/* importando ContatoController */
let ContatoController = require('../controllers/ContatoController');

router.post('/cadastrar', ContatoController.cadastrar);

module.exports = router;