const { Router } = require('express')
const router = Router()

router.get('/fotos', (req, res, next) => {
  res.send('Ola Mundo')
})

module.exports = router