let servicos = require('../data/servicos');

module.exports = {
  index(req, res, next){
    res.render('servicos', {
      title: 'Petshop DH - Serviços',
      servicos: servicos
    });
  }
}