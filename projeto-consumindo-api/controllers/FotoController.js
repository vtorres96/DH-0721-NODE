const api = require('../config/api')

module.exports = {
  async api(req, res, next) {
    try {
      let { data } = await api.get('/photos')

      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({
        message: 'Erro: ' + error
      })
    }
  },

  async index(req, res, next) {
    res.render('index')
  }
}