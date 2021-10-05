const express = require('express');
const multer = require('multer');
const path = require('path');

/* importando ServicosController */
const ServicosController = require('../controllers/ServicosController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', 'public', 'uploads'),
  filename: function(req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.get('/', ServicosController.index);

router.get('/adicionar', ServicosController.cadastrar);
router.post('/salvar', upload.single('imagem'), ServicosController.salvar);

module.exports = router;