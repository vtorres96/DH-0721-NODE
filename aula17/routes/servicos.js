const express = require('express');
const multer = require('multer');
const storage = require('../config/file-upload');

/* importando ServicosController */
const ServicosController = require('../controllers/ServicosController');

const router = express.Router();

const upload = multer({ storage: storage });

router.get('/', ServicosController.index);

router.get('/adicionar', ServicosController.cadastrar);
router.post('/salvar', upload.single('imagem'), ServicosController.salvar);

module.exports = router;