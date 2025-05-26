create database Diario_da_galaxia;

use Diario_da_galaxia;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	senha VARCHAR(10),
	email VARCHAR(45)
);

select * from Usuario;


