'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Tasks', [
      {
      title: 'tarefa teste',
      description: 'descricao teste',
      done: false,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
