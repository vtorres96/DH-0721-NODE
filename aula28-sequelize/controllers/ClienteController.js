const { Cliente, Sequelize } = require('../models');

module.exports = {
  async index(req, res, next){
    const clientes = await Cliente.findAll();

    res.render('listar-cliente', { clientes: clientes });
  },

  async cadastrar(req, res, next){
    res.render('criar-cliente');
  },

  async salvar(req, res, next){
    let dados = req.body;
    await Cliente.create(dados);

    res.render('criar-cliente', { adicionado: true });
  },

  async editar(req, res, next){
    // recebendo propriedade ID do Cliente
    let id = req.params.id;

    // encontrando o cliente com base no ID passado como parametro
    let cliente = await Cliente.findByPk(id);

    // - retornar o cliente encontrado na view editar-cliente
    res.render('editar-cliente', { cliente: cliente });
  },

  async atualizar(req, res, next){
    // recebendo propriedade ID do Cliente
    let id = req.params.id;
    
    // recebendo propriedades do corpo da requisicao (req.body)
    let { nome, email, cpf, sexo } = req.body;

    // encontrando o cliente com base no ID passado como parametro
    let cliente = await Cliente.findByPk(id);

    // aplicando atualizacao no cliente - no caso abaixo daria para trabalhar
    // com a maneira de atribuicao de sintaxe curta
    cliente.update({
      nome: nome,
      email: email,
      cpf: cpf,
      sexo: sexo
    });

    res.render('editar-cliente', { cliente: cliente, atualizado: true })
  },

  async excluir(req, res, next){
    // recebendo propriedade ID do Cliente
    let id = req.params.id;

    // encontrando o cliente com base no ID passado como parametro
    let cliente = await Cliente.findByPk(id);

    // excluindo registro
    cliente.destroy();

    res.redirect('/clientes/listar');
  },
}