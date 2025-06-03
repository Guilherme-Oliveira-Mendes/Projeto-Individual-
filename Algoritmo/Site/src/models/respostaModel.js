var conexao = require("../database/conexao");

async function obterEstatisticas() {
    var [results] = await conexao.query(`
        SELECT 
            IFNULL(SUM(qtdSith), 0) AS totalSith,
            IFNULL(SUM(qtdJedi), 0) AS totalJedi,
            IFNULL(SUM(qtdJediCinza), 0) AS totalJediCinza,
            IFNULL(SUM(qtdSith + qtdJedi + qtdJediCinza), 0) AS totalRespostas
        FROM UsuarioQuiz;
    `);
    return results[0];
}

async function salvarRespostas(idUsuario, idQuiz, qtdJedi, qtdJediCinza, qtdSith) {
    var [resultado] = await conexao.query(`
        INSERT INTO UsuarioQuiz (idUsuario, idQuiz, qtdJedi, qtdJediCinza, qtdSith)
        VALUES (?, ?, ?, ?, ?)
    `, [idUsuario, idQuiz, qtdJedi, qtdJediCinza, qtdSith]);

    return resultado;
}

module.exports = {
    obterEstatisticas,
    salvarRespostas
};