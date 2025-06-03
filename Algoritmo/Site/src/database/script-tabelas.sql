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
    idUsuario INT,
    idQuiz INT,
    qtdSith INT DEFAULT 0,
    qtdJedi INT DEFAULT 0,
    qtdJediCinza INT DEFAULT 0,
    PRIMARY KEY (idUsuario, idQuiz),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idQuiz) REFERENCES Quiz(idQuiz)
);


select * from Usuario;

SELECT 
    SUM(qtdSith) AS totalSith,
    SUM(qtdJedi) AS totalJedi,
    SUM(qtdJediCinza) AS totalJediCinza,
    SUM(qtdSith + qtdJedi + qtdJediCinza) AS totalRespostas
FROM UsuarioQuiz;

