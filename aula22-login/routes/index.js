var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Petshop DH',
    usuario: req.session.usuario
  });
});

module.exports = router;
