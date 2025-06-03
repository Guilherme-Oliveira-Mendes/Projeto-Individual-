var respostaModel = require("../models/respostaModel");

async function obterEstatisticas(req, res) {
    try {
        var estatisticas = await respostaModel.obterEstatisticas();
        res.status(200).json(estatisticas);
    } catch (error) {
        console.error("Erro ao obter estatísticas:", error);
        res.status(500).json({ erro: "Erro ao obter estatísticas" });
    }
}

async function salvarRespostas(req, res) {
    try {
        var { idUsuario, idQuiz, qtdJedi = 0, qtdJediCinza = 0, qtdSith = 0 } = req.body;

       
        if (!idUsuario || !idQuiz) {
            return res.status(400).json({ erro: "Campos obrigatórios 'idUsuario' e 'idQuiz' são necessários." });
        }

        
        var resultado = await respostaModel.salvarRespostas(
            idUsuario,
            idQuiz,
            qtdJedi,
            qtdJediCinza,
            qtdSith
        );

        res.status(201).json({
            mensagem: "Respostas salvas com sucesso.",
            idResposta: resultado.insertId 
        });
    } catch (erro) {
        console.error("Erro ao salvar respostas:", erro);
        res.status(500).json({ erro: "Erro ao salvar respostas" });
    }
}

module.exports = {
    obterEstatisticas,
    salvarRespostas
};
