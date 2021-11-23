module.exports = (sequelize, DataType) => {
	const Cliente = sequelize.define(
		'Cliente', 
	{
    idcliente: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataType.STRING,
		sexo: DataType.STRING,
		email: DataType.STRING,
    cpf: DataType.STRING,
	},
{
    tableName: 'cliente',
    timestamps: false,
	});

  Cliente.associate = (model) => {
    Cliente.hasMany(model.Telefone, {
      foreignKey: 'id_cliente',
      as: 'telefone'
    });

    Cliente.hasOne(model.Endereco, {
      foreignKey: 'id_cliente',
      as: 'endereco'
    });
  }

	return Cliente;
};