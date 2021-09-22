const app = require('../app');
let servicos = require('../data/servicos');

module.exports = {
  index(req, res, next){
    res.send(servicos);
  }
}