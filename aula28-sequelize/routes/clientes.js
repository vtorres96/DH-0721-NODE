const express = require('express');
const router = express.Router();

const ClienteController = require("../controllers/ClienteController");

/* GET home page. */
router.get('/', ClienteController.index);

module.exports = router;