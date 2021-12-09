const { Router } = require('express')
const router = Router()

const FotoController = require('../controllers/FotoController')
const GitHubController = require('../controllers/GitHubController')

router.get('/api/todas-fotos/:limit', FotoController.obterTodos)
router.get('/api/fotos/:id', FotoController.obterPorId)
router.get('/fotos', FotoController.index)

router.get('/buscar-repositorios-por-usuario', GitHubController.index)

module.exports = router 