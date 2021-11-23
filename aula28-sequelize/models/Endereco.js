module.exports = (sequelize, DataType) => {
	const Endereco = sequelize.define(
		'Endereco', 
	{
    idendereco: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rua: DataType.STRING,
		bairro: DataType.STRING,
    cidade: DataType.STRING,
		estado: DataType.STRING,
		id_cliente: DataType.INTEGER,
	},
{
    tableName: 'endereco',
    timestamps: false,
	});

  Endereco.associate = (model) => {
    Endereco.hasOne(model.Cliente, {
      foreignKey: 'idcliente',
      as: 'cliente'
    })
  }

	return Endereco;
};