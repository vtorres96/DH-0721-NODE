const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

/* importando ContatoController */
const ContatoController = require('../controllers/ContatoController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/cadastrar', upload.single('imagem'), ContatoController.cadastrar);

module.exports = router;