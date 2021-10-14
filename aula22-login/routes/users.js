var express = require('express');
var router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* renderizando tela de login de usuarios */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Petshop DH - Login' });
});

router.post('/logar', UsuarioController.autenticar);

module.exports = router;
