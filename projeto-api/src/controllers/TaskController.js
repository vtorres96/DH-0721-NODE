const { Task } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      let tasks = await Task.findAll({
        where: {
          deleted: 0
        }
      });
      
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json({ message: 'Error ' + error });
    }
  }
}
