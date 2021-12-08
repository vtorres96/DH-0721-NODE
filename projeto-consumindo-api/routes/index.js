const { Router } = require('express')
const router = Router()

const FotoController = require('../controllers/FotoController')

router.get('/api/todas-fotos/:limit', FotoController.obterTodos)
router.get('/api/fotos/:id', FotoController.obterPorId)
router.get('/fotos', FotoController.index)

module.exports = router 