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

/* processando autenticacao do login de usuarios */
router.post('/logar', UsuarioController.autenticar);

/* renderizando tela de cadastro de usuarios */
router.get('/cadastro', function(req, res, next) {
  res.render('usuario', { title: 'Petshop DH - Usuários' });
});

/* processando cadastro de usuarios */
router.post('/cadastrar', UsuarioController.cadastrar);

/* processando logout de usuarios */
router.get('/logout', UsuarioController.deslogar);

module.exports = router;
