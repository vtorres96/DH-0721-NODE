const { gitHubApi } = require('../config/api')

module.exports = {
  async index(req, res, next) {
    try {
      let usuario = req.query.usuario
      if (usuario) {
        let { data } = await gitHubApi.get('/' + usuario + '/repos')

        return res.render('listar-repositorios', { 
          repositorios: data,
          usuario: usuario
        })
      }

      return res.render('listar-repositorios', {
        repositorios: [],
        usuario: null
      })
    } catch (error) {
      console.log(error)
      return res.render('erro', { erro: error })
    }
  }
}