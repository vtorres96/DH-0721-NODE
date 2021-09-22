let express = require('express')
let router = express.Router();

/* importando ServicosController */
let ServicosController = require('../controllers/ServicosController');

router.get('/', ServicosController.index);

module.exports = router;