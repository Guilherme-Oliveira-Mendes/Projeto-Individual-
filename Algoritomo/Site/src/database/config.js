const mysql = require("mysql2");

const mySqlConfig = {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "Diario_da_galaxia",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "banana19",
    port: process.env.DB_PORT || 3306
};

function executar(instrucao) {
    if (
        process.env.AMBIENTE_PROCESSO !== "producao" &&
        process.env.AMBIENTE_PROCESSO !== "desenvolvimento"
    ) {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        const conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on("error", function (erro) {
            return console.log("ERRO NO MySQL SERVER: ", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar,
    ...mySqlConfig 
};
