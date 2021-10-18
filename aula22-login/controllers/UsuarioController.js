const usuarios = require('../data/usuarios');

module.exports = {
  autenticar(req, res, next) {
    const { email, senha } = req.body;
    let usuario = usuarios.find(usuario => usuario.email == email);

    if(!usuario){
      return res.render('login', {
        title: 'Petshop DH - Login',
        erro: true,
      });
    }

    if(usuario.senha != senha){
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