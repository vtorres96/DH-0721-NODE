const bcrypt = require('bcrypt');
const usuarios = require('../data/usuarios');
const armazenaRegistrosNoJson = require('../utils/armazena-registros-json');

module.exports = {
  cadastrar(req, res, next){
    let { nome, email, senha } = req.body;
    
    /* criando objeto para adicionar no array usuarios */
    let id = usuarios.length + 1;
    senha = bcrypt.hashSync(senha, 10);
    let usuario = { id, nome, email, senha };

    /* adicionando objeto dentro do array usuarios */
    usuarios.push(usuario);

    /* executando metodo para atualizar os registros
     do arquivo usuario.json */
    armazenaRegistrosNoJson(usuarios, 'usuarios.js');
    
    res.render('usuario', {
      title: 'Petshop DH - usuario',
      adicionado: true
    });
  },

  autenticar(req, res, next) {
    const { email, senha } = req.body;
    let usuario = usuarios.find(usuario => usuario.email == email);

    if(!usuario){
      return res.render('login', {
        title: 'Petshop DH - Login',
        erro: true,
      });
    }

    if(!bcrypt.compareSync(senha, usuario.senha)){
      return res.render('login', {
        title: 'Petshop DH - Login',
        erro: true,
      });
    }

    let { senha: semSenha, ...usuarioSemSenha } = usuario

    req.session.usuario = usuarioSemSenha;

    res.render('index', {
      title: 'Petshop DH',
      usuario: req.session.usuario
    });
  },

  deslogar(req, res, next) {
    req.session.destroy();
    res.redirect('/');
  }
}