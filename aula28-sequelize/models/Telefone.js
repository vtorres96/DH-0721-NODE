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
		idcliente: DataType.INTEGER,
	},
{
    tableName: 'telefone',
    timestamps: false,
	});
	return Telefone;
};