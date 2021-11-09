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
	return Cliente;
};