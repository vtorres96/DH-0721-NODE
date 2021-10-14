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

    req.session.usuario = usuario;

    res.render('index', {
      title: 'Petshop DH',
      usuario: req.session.usuario
    });
  }
}