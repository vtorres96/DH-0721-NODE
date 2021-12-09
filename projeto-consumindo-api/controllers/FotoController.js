const { jsonPlaceHolderApi } = require('../config/api')

module.exports = {
  async obterTodos(req, res, next) {
    try {
      let limit = req.params.limit
      let { data } = await jsonPlaceHolderApi.get('/photos', {
        params: {
          _limit: limit
        }
      })

      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({
        message: 'Erro: ' + error
      })
    }
  },

  async obterPorId(req, res, next) {
    try {
      let id = req.params.id
      let { data } = await jsonPlaceHolderApi.get('/photos/' + id)

      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({
        message: 'Erro: ' + error
      })
    }
  },

  async index(req, res, next) {
    try {
      let { data } = await jsonPlaceHolderApi.get('/photos', {
        params: {
          _limit: 15
        }
      })

      return res.render('index', { fotos: data })
    } catch (error) {
      return res.render('erro', { erro: error })
    }
  }
}