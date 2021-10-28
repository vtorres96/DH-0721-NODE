



/* indicando qual banco de dados iremos utilizar */
use turma_sete;

/* ordenando registros - order by - forma crescente que devemos utilizar o prefixo ASC,
porem, esse prefixo ASC ja e aplicado nas instrucoes de forma padrao */
select * from produtos
ORDER BY id ASC;

/* ordenando registros - order by - forma decrescente que devemos utilizar o prefixo DESC */
select * from produtos
ORDER BY id DESC;

/* ordenando registros - order by - utilizando uma coluna que e do tipo varchar 
no caso, a coluna descricao, e iremos analisar como os registros ficam exibidos
de forma decrescente */
select * from produtos
ORDER BY descricao DESC;

/* ordenando registros - order by - utilizando uma coluna que e do tipo varchar 
no caso, a coluna descricao, e iremos analisar como os registros ficam exibidos
de forma crescente */
select * from produtos
ORDER BY descricao ASC;

/* limitando quantidade de registros que serao exibidos na consulta - limit */
/* criando consulta que exiba apenas os tres primeiros registros da tabela produtos */
select * from produtos
limit 3;

/* criando consulta que exiba apenas os tres ultimos registros da tabela produtos */
select * from produtos
order by id desc
limit 3;

/* agrupando informacoes - group by - geralmente utilizado para relatorios que envolvem
casos mais estatisticos, como por exemplo, quantidade de produtos vendidos em um determinado periodo,
qual categoria de produto vendeu mais produtos, qual marca vendeu mais se comparada a outras marcas,
qual foi o valor de faturamento de um determinado periodo, etc... */

/* contando quantidade de produtos cadastrados de cada categoria */
select COUNT(*) as xpto, id_categoria from produtos
group by id_categoria;

/* funcoes de agregacao - avg - calcula media aritmetica de modo que soma
os valores de determinada coluna e divide pela quantidade de registros da tabela */
/* 
pessoa1 - 10
pessoa2 - 5
pessoa3 - 5
pessoa4 - 4
total de pontos / quantidade de pessoas => 24 / 4 => 6

1º registro na coluna valor possui 10
2º registro na coluna valor possui 5
3º registro na coluna valor possui 5
4º registro na coluna valor possui 4
Total de valores na coluna valor / total de registros => 24 / 4 => 6
*/
select AVG(valor) from produtos;

/* funcoes de agregacao - sum - efetua a soma dos valores de determinada coluna */
select SUM(valor) from produtos;

/* funcoes de agregacao - min - obtem o menor valor de determinada coluna */
select MIN(valor) from produtos;

/* funcoes de agregacao - max - obtem o maior valor de determinada coluna */
select MAX(valor) from produtos;

/* efetuando busca com base em sequencia de caracteres - like - buscar
registros que tenham a letra P no inicio da palavra */
/* no like temos o costume de utilizar um caracter coringa que e o simbolo de porcentagem 
'%' - simplificando ele basicamente ignora quantidade de caracteres dentro de uma busca,
lembrando que sempre vem combinado anteriormente ao caracter desejado ou apos o caracter desejado */
/* no caso abaixo iremos combinar 'p%', pois nao importa quantos caracteres venham apos a letra P
o que importa e que encontre registros que iniciem com a letra P e ignore caracteres restantes */
select * from produtos
where descricao like 'p%';

/* efetuando busca com base em sequencia de caracteres - like - buscar
registros que tenham a letra L no final da palavra */
/* no caso abaixo iremos combinar '%l', pois nao importa quantos caracteres venham antes da letra L
o que importa e que encontre registros que se encerrem com a letra L e ignore caracteres anteriores */
select * from produtos
where descricao like '%l';

/* efetuando busca com base em sequencia de caracteres - like - buscar
registros que tenham a letra A na palavra */
/* no caso abaixo iremos combinar '%a%', 
pois nao importa quantos caracteres venham antes da letra A e nem importa
tambem quantos caracteres encontraremos apos a letra A o que importa e que 
encontre registros que contenham a letra A independente da posicao */
select * from produtos
where descricao like '%a%';

/* efetuando busca com base em sequencia de caracteres - like - buscar
registros que tenham a letra A na segunda letra da palavra */
/* no caso abaixo iremos combinar '_a%', pois pretendemos que seja ignorado
o primeiro caracter, de modo que o segundo sera a letra A e utilizaremos o '%' apos a letra A
pois nao importa quantos caracteres venham apois a letra A o que importa e que 
encontre registros que contenham a letra A independente da posicao */
select * from produtos
where descricao like '_a%';

/* joins - inner join, right join e left join */

/* vamos imaginar o caso das nossas duas tabelas: categorias e produtos,
primeiro cenario que devemos imaginar antes de pensar em trabalhar com JOIN...
Nossas tabelas estao com o relacionamento das colunas de forma devida e correta?
Caso esteja tranquilo o relacionamento, passamos a imginar outra etapa...
Sabendo que as tabelas possuem relacionamento entre elas, como no nosso caso,
temos que a tabela Categorias tem a coluna ID que se relaciona com a coluna ID_CATEGORIA
da tabela Produtos, logo, sabemos que podemos trabalhar com JOIN a fim de "cruzar" essas informacoes
no momento de gerar uma consulta */

/* inner join - foca em exibir apenas registros que tenham valores relacionados entre as tabelas,
ou seja, para um registro ser exibido na consulta com INNER JOIN, temos que ter registros com o mesmo
valor tanto na coluna id_categoria da tabela produtos quanto na coluna id da tabela categorias */
/* categorias -> ID 1 - DESCRICAO - mouse, ID - 2, DESCRICAO - games
produtos -> ID 1 - DESCRICAO - mouse gamer, ID_CATEGORIA - 1
			ID 2 - DESCRICAO - teclado */
/* CATEGORIAS.ID = PRODUTOS.ID_CATEGORIA ??? SE BATEREM OS VALORES DA COLUNA, O REGISTRO
SERA EXIBIDO NA CONSULTA, CASO CONTRARIO NAO SERA */
/* exibir numa consulta simples, descricao do produto, valor do produto e descricao da categoria */
select produtos.descricao as produto, produtos.valor, categorias.descricao as categoria from produtos
inner join categorias on (categorias.id = produtos.id_categoria);

/* left join - foca em exibir todos registros da tabela que estara a esquerda na consulta,
e caso encontre relacao entre as colunas categorias.id e produtos.id_categoria, ira listar esses
valores na consulta, caso contrario ira trazer as colunas da tabela que esta a direita com valor NULL */
select categorias.descricao as categoria , produtos.descricao as produto, produtos.valor from categorias
left join produtos on (categorias.id = produtos.id_categoria);

/* right join - foca em exibir todos registros da tabela que estara a direita na consulta,
e caso encontre relacao entre as colunas categorias.id e produtos.id_categoria, ira listar esses
valores na consulta, caso contrario ira trazer as colunas da tabela que esta a esquerda com valor NULL */
select categorias.descricao as categoria, produtos.descricao as produto, produtos.valor from categorias
right join produtos on (categorias.id = produtos.id_categoria);

/* Exibir o cliente e caso ele possua endereco listar os enderecos do cliente */
select cliente.nome, cliente.email, endereco.bairro, endereco.cidade from cliente
left join endereco on (cliente.idcliente = endereco.id_cliente);
