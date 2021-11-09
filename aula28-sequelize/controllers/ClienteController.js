const { Cliente, Sequelize } = require('../models');

module.exports = {
  async index(req, res, next){
    const clientes = await Cliente.findAll();

    return res.json(clientes);
  },
}