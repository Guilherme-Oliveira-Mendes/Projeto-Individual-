var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.email;
var senha = req.body.senha;


    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                         res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        
                                    });
                        
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;


       console.log("REQUISIÇÃO DE CADASTRO CHEGOU!");
    console.log("Dados recebidos para cadastro:");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);

    if (!nome || !email || !senha) {
        return res.status(400).send("Algum campo está undefined!");
    }

    usuarioModel.cadastrar(nome, email, senha)
        .then(function (resultado) {
            console.log("Resultado do insert:", resultado);
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro no insert:", erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

module.exports = {
    autenticar,
    cadastrar
}