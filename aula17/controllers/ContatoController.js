const contatos = require('../data/contato');

module.exports = {
  cadastrar(req, res, next){
    let { nome, email, mensagem } = req.body;

    let id = contatos.length + 1;
    let user = { id, nome, email, mensagem };

    res.json(user);
  }
}