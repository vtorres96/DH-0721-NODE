const contatos = require('../data/contato');
const armazenaRegistrosNoJson = require('../utils/armazena-registros-json');

module.exports = {
  cadastrar(req, res, next){
    let { nome, email, mensagem } = req.body;
    let { filename } = req.file;
    
    /* criando objeto para adicionar no array contatos */
    let id = contatos.length + 1;
    let contato = { id, nome, email, mensagem, imagem: filename };

    /* adicionando objeto dentro do array contatos */
    contatos.push(contato);

    /* executando metodo para atualizar os registros
     do arquivo contato.json */
    armazenaRegistrosNoJson(contatos, 'contato.js');
    
    res.render('contato', {
      title: 'Petshop DH - Contato',
      adicionado: true
    });
  }
}