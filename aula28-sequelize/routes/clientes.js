const express = require('express');
const router = express.Router();

const ClienteController = require("../controllers/ClienteController");

/* renderizando tela de listagem de clientes */
router.get('/listar', ClienteController.index);

/* renderizando tela de cadastro de clientes */
router.get('/cadastrar', ClienteController.cadastrar);

/* processando cadastro de clientes */
router.post('/salvar', ClienteController.salvar);

/* renderizando tela de edicao de clientes */
router.get('/editar/:id', ClienteController.editar);

/* processando atualizacao de clientes */
router.post('/atualizar/:id', ClienteController.atualizar);

/* processando exclusao de cliente */
router.get('/excluir/:id', ClienteController.excluir);

module.exports = router;