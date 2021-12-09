module.exports = {
  async index(req, res, next) {
    try {
      return res.render('listar-repositorios', {
        repositorios: [],
        usuario: null
      })
    } catch (error) {
      return res.render('erro', { erro: error })
    }
  }
}