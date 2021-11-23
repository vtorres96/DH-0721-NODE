module.exports = (sequelize, DataType) => {
	const Telefone = sequelize.define(
		'Telefone', 
	{
    idtelefone: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: DataType.STRING,
		numero: DataType.STRING,
		id_cliente: DataType.INTEGER,
	},
{
    tableName: 'telefone',
    timestamps: false,
	});

  Telefone.associate = (item) => {
    Telefone.belongsTo(item.Cliente, {
      foreignKey: 'id_cliente',
      as: 'cliente'
    })
  }

	return Telefone;
};