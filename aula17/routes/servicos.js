let express = require('express');

/* importando ServicosController */
let ServicosController = require('../controllers/ServicosController');

let router = express.Router();

router.get('/', ServicosController.index);

module.exports = router;