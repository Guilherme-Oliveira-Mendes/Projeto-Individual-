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

module.exports = {
    obterEstatisticas
};

