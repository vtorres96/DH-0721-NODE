const { Router } = require('express')
const router = Router()

const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.index)

module.exports = router;