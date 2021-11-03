/* criando tabela de categorias */
create table categorias (
	id int(11) primary key auto_increment not null,
    descricao varchar(50)
);

/* criando tabela de produtos */
create table produtos (
	id int(11) primary key auto_increment not null,
	descricao varchar(50),
    valor decimal(10,2),
	id_categoria int(11),
    FOREIGN KEY(id_categoria)
    REFERENCES categorias(id)
);

INSERT INTO categorias (descricao) VALUES
('notebooks'), ('cosméticos e perfumaria'), ('games'), 
('mouses'), ('móveis'), ('eletrônicos'), ('celulares');

INSERT INTO produtos (descricao, valor, id_categoria) VALUES
('lenovo thinkpad e480', 3500, 1), ('212 vip', 450, 2), 
('The Last Of Us II', 300, 3), ('mouse gamer razer deathadder essential', 150, 4),
('macbook pro', 10900, 1), ('1 million', 500, 2), ('lenovo thinkpad e431', 2500, 1), 
('Angel', 600, 2), ('God Of War IV', 170, 3), 
('mouse gamer redragon cobra', 109, 4), ('Playstation V', 5500, 3), ('moto g9 play', 10, 7);




