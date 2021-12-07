const { Router } = require('express')
const router = Router()

const FotoController = require('../controllers/FotoController')

router.get('/api/fotos', FotoController.api)
router.get('/fotos', FotoController.index)

module.exports = router 