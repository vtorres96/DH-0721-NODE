var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET pagina de contato */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Petshop DH - Contato' });
});

router.get('/sobre', function(req, res, next){
  res.render('sobre', { title: 'Petshop DH - Sobre Nós' });
});

module.exports = router;
