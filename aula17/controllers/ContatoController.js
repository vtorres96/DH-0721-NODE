const path = require('path');
const fs = require('fs');

const contatos = require('../data/contato');

module.exports = {
  cadastrar(req, res, next){
    let { nome, email, mensagem } = req.body;
    
    /* criando objeto para adicionar no array contatos */
    let id = contatos.length + 1;
    let contato = { id, nome, email, mensagem };

    /* adicionando objeto dentro do array contatos */
    contatos.push(contato);

    /* transformando o array contatos em uma string 
    para sobrescrever o conteudo do data/contatos.js */
    let conteudoString = JSON.stringify(contatos);
    
    /* obtendo o caminho ate o arquvivo data/contato.js 
    para nao sobrescrever arquivos incorretos */
    let caminhoArquivo = path.join('data', 'contato.js');

    /* sobrescrever o conteudo do arquivo data/contato.js */
    fs.writeFileSync(caminhoArquivo, 'module.exports = ');
    fs.appendFileSync(caminhoArquivo, conteudoString);
    
    res.render('contato', {
      title: 'Petshop DH - Contato',
      adicionado: true
    });
  }
}