create database Diario_da_galaxia;

use Diario_da_galaxia;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	senha VARCHAR(10),
	email VARCHAR(45)
);

CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(200)
);
CREATE TABLE UsuarioQuiz (
    idUsuarioQuiz INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    idQuiz INT,
    qtdSith INT DEFAULT 0,
    qtdJedi INT DEFAULT 0,
    qtdJediCinza INT DEFAULT 0,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idQuiz) REFERENCES Quiz(idQuiz)
);

INSERT INTO Quiz (descricao) VALUES ('Quiz - De que lado da Força você está?');

SHOW TABLES;
<<<<<<< HEAD

=======
>>>>>>> 14b8350182eaed2afd5157a17e9b0caf68af67cd
select * from Usuario;
select * from Quiz;
select * from UsuarioQuiz;


