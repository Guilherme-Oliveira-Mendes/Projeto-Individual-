const conexao = require("../database/conexao");

async function obterEstatisticas() {
    const [results] = await conexao.query(`
        SELECT 
            IFNULL(SUM(qtdSith), 0) AS totalSith,
            IFNULL(SUM(qtdJedi), 0) AS totalJedi,
            IFNULL(SUM(qtdJediCinza), 0) AS totalJediCinza,
            IFNULL(SUM(qtdSith + qtdJedi + qtdJediCinza), 0) AS totalRespostas
        FROM UsuarioQuiz;
    `);
    return results[0];
}

module.exports = {
    obterEstatisticas
};