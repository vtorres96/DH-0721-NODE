const { Cliente, Sequelize } = require('../models');

module.exports = {
  async index(req, res, next){
    const clientes = await Cliente.findAll();

    res.render('listar-cliente', { clientes: clientes });
  },

  async cadastrar(req, res, next){
    res.render('criar-cliente');
  },

  async salvar(req, res, next){

  },

  async editar(req, res, next){
    res.render('editar-cliente');
  },

  async atualizar(req, res, next){
    
  },

  async excluir(req, res, next){
    
  },
}