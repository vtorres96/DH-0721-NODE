let servicos = require('../data/servicos');
const armazenaRegistrosNoJson = require('../utils/armazena-registros-json');

module.exports = {
  index(req, res, next){
    res.render('servicos', {
      title: 'Petshop DH - Serviços',
      servicos: servicos
    });
  },

  cadastrar(req, res, next){
    res.render('adicionar-servico', {
      title: 'Petshop DH - Adicionar Serviço'
    });
  },

  salvar(req, res, next){
    let { titulo, descricao, valor } = req.body;
    let { filename } = req.file;

    /* criando objeto para adicionar no array servicos */
    let id = servicos.length + 1;
    let servico = { id, titulo, descricao, valor, imagem: filename };

    /* adicionando objeto dentro do array servicos */
    servicos.push(servico);

    /* executando metodo para atualizar os registros
     do arquivo servico.json */
    armazenaRegistrosNoJson(servicos, 'servicos.js');
    
    res.render('adicionar-servico', {
      title: 'Petshop DH - Serviços',
      adicionado: true
    });
  }
}