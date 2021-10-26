/* 1 - criar um banco de dados chamado turma_sete */
create database turma_sete;

/* indicando que queremos utilizar o banco de dados turma_sete */
use turma_sete;

/* Comandos DDL - Data Definition Language - comandos que afetam a estrutura 
dos dados, ou seja, criar tabela, alterar tabela, excluir tabela */
/* criando tabela cliente */
CREATE TABLE CLIENTE(
	IDCLIENTE INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(30) NOT NULL,
	SEXO ENUM('M','F') NOT NULL,
	EMAIL VARCHAR(50) UNIQUE,
	CPF VARCHAR(15) UNIQUE
);

/* criando tabela endereco */
CREATE TABLE ENDERECO(
	IDENDERECO INT PRIMARY KEY AUTO_INCREMENT, 
	RUA VARCHAR(30) NOT NULL,
	BAIRRO VARCHAR(30) NOT NULL,
	CIDADE VARCHAR(30) NOT NULL,
	ESTADO CHAR(2) NOT NULL,
	ID_CLIENTE INT UNIQUE,
	FOREIGN KEY(ID_CLIENTE)
	REFERENCES CLIENTE(IDCLIENTE)
);

/* criando tabela telefone */
CREATE TABLE TELEFONE(
	IDTELEFONE INT PRIMARY KEY AUTO_INCREMENT, 
	TIPO ENUM('RES','COM','CEL') NOT NULL,
	NUMERO VARCHAR(10) NOT NULL,
	ID_CLIENTE INT,
	FOREIGN KEY(ID_CLIENTE)
	REFERENCES CLIENTE(IDCLIENTE)
);

/* criando tabela tabela_qualquer para testes de alter table */
create table tabela_qualquer(
	id int primary key auto_increment,
    descricao varchar(50)
);

/* descrever informacoes tabela_qualquer */
desc tabela_qualquer;

/* comandos alter table - add - adiciona um novo campo na tabela tabela_qualquer */
alter table tabela_qualquer add nova_coluna varchar(30);

/* comandos alter table - modify - modifica o tipo primitivo de determinado campo de uma tabela */
alter table tabela_qualquer modify nova_coluna int(11);

/* comandos alter table - change - altera nome da coluna e tipo primitivo de uma tabela */
alter table tabela_qualquer change nova_coluna telefone varchar(9);

/* comandos alter table - rename - renomear uma tabela existente */
alter table tabela_qualquer rename to funcionarios;

/* desc/describe - descrevendo informacoes da tabela funcionarios */
describe funcionarios;

/* comandos alter table - drop - excluir uma coluna especifica de uma tabela */
alter table funcionarios drop descricao;

/* comando drop - table - excluir determinada tabela */
drop table funcionarios;

/* comando drop - database - excluir determinado banco de dados */
/* drop database turma_sete; */

/* Comandos DML - Data Manipulation Language - comandos que nos ajudam a manipular
os dados, ou seja, efetuar alteração de um registro, selecionar determinados registros
para uma consulta, excluir um registro, etc... */

/* Inserir 3 registros na tabela de clientes, e cada cliente deverá possuir exatamente 1
endereço e 2 telefones */
INSERT INTO CLIENTE (nome, sexo, email, cpf) VALUES 
('Bruno', 'M', 'bruno@gmail.com', '12343223454'),
('Thiago', 'M', 'thiago@gmail.com', '13454785796'),
('Talita', 'F', 'talita@gmail.com', '19283746256');

INSERT INTO ENDERECO (rua, bairro, cidade, estado, id_cliente) VALUES
('rua ninete', 'casa verde', 'São Paulo', 'SP', 1),
('avenida paulista', 'centro', 'São Paulo', 'SP', 2),
('alameda jaú', 'itam', 'São Paulo', 'SP', 3);

INSERT INTO TELEFONE (tipo, numero, id_cliente) VALUES 
('RES', '1139847556', 1),
('CEL', '1194847556', 1),
('RES', '1139123556', 2),
('CEL', '1191293456', 2),
('RES', '1139991556', 3),
('CEL', '1199827611', 3);

/* atualizar um registro - update */
/* Devemos alterar o nome, email e cpf de um cliente que foi cadastrado errado, o cliente
em questao possui o codigo da coluna idcliente com valor 2 
lembrando que os valores respectivamente deverão ser: 
nome - 'Bruno Moreira', email - 'b_moreira@gmail.com', cpf '39283746587' */
/* PS: NUNCA DEVE-SE FAZER UM UPDATE SEM WHERE, POIS, AFETARA TODOS REGISTROS DA TABELA */
UPDATE cliente set nome = 'Bruno Moreira', email = 'b_moreira@gmail.com', cpf = '39283746587'
WHERE idcliente = 2;

/* verificando se a atualizacao ocorreu corretamente - select - visualizando os registros
da tabela cliente */
SELECT * FROM cliente;

/* excluir um registro - update */
/* Devemos excluir um telefone residencial de um cliente que foi cadastrado errado, o cliente
em questao possui o codigo da coluna id_cliente com valor 3 */
/* Primeiro devemos saber qual o ID do registro de telefones que queremos excluir, portanto,
executaremos uma consulta (faremos um select) */
SELECT * FROM telefone 
WHERE id_cliente = 3;

/* Agora que sabemos que o registro em questao que devemos excluir e o que possui
idtelefone com valor 5, iremos criar nossa query de delete */
/* PS: NUNCA DEVE-SE FAZER UM DELETE SEM WHERE, POIS, EXCLUIRA TODOS REGISTROS DA TABELA */
DELETE FROM telefone
WHERE idtelefone = 5;

/* consultas */
/* Listar apenas registros da tabela telefone
que estejam relacionados aos clientes de ID 1 e 3 */
/* podemos resolver utilizando operadores logicos (E - AND e OR - OU) 
e tambem podemos resolver com a clausula IN */
SELECT * FROM telefone
WHERE id_cliente = 1 OR id_cliente = 3;

/* IN - podemos passar os valores que queremos buscar em determinada coluna,
separados por virgula como se estivessemos passando um array de criterios */
SELECT * FROM telefone
WHERE id_cliente IN (1,3);

/* Listar apenas registros da tabela telefone que 
estejam dentro de um intervalo com base na coluna idtelefone entre 2 e 5 */
/* BETWEEN - utilizado para buscar um intervalo de valores */
SELECT * FROM telefone
WHERE idtelefone BETWEEN 2 AND 5;

/* exemplificando como exibir qual o endereco de cada cliente utilizando join */
select cliente.*, endereco.cidade, endereco.estado from cliente
inner join endereco on (cliente.idcliente = endereco.id_cliente);