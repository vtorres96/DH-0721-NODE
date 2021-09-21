var express = require('express');
var router = express.Router();

let PetsController = require('../controllers/PetsController');

/* GET pets listing. */
router.get('/', PetsController.index);

/* Request Body */
router.post('/request-body', function(req, res, next) {
  /* obtendo objeto que foi enviado no corpo da requisicao - testamos atraves do postman */
  let { nome, sobrenome } = req.body;
  let mensagem = 'Recebemos sua solicitação Sr(a) ' + nome + ' ' + sobrenome;

  res.send(mensagem);
});

/* Request Params */
router.get('/request-params/:nome', function(req, res, next) {
  /* obtendo propriedade nome que foi enviada na URL */
  let { nome } = req.params;

  res.send('Olá ' + nome);
});

/* Query Params */
router.get('/query-params', function(req, res, next) {
  let { cor, tamanho, preco } = req.query;

  let mensagem = 'Encontramos x tênis com as características a seguir: cor ' + cor + ' e tamanho ' + tamanho;

  res.send(mensagem);
});

module.exports = router;