const respostaModel = require("../models/respostaModel");

async function obterEstatisticas(req, res) {
    try {
        const estatisticas = await respostaModel.obterEstatisticas();
        res.status(200).json(estatisticas);
    } catch (error) {
        console.error("Erro ao obter estatísticas:", error);
        res.status(500).json({ erro: "Erro ao obter estatísticas" });
    }
}

async function salvarRespostas(req, res) {
    try {
        const { idUsuario, idQuiz, qtdJedi, qtdJediCinza, qtdSith } = req.body;

        if (!idUsuario || !idQuiz) {
            return res.status(400).json({ erro: "Dados obrigatórios ausentes." });
        }

        const resultado = await respostaModel.salvarRespostas(
            idUsuario,
            idQuiz,
            qtdJedi,
            qtdJediCinza,
            qtdSith
        );
        res.status(200).json(resultado);
    } catch (erro) {
        console.error("Erro ao salvar respostas:", erro);
        res.status(500).json({ erro: "Erro ao salvar respostas" });
    }
}

module.exports = {
    obterEstatisticas,
    salvarRespostas
};
