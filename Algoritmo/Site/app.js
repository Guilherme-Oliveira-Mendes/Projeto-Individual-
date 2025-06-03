var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

var usuarioRouter = require('./src/routes/usuarios');
app.use('/usuarios', usuarioRouter);
var respostasRouter = require("./src/routes/respostas");
app.use("/respostas", respostasRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##               ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####              ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##             ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######    ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##             ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##              ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##               ##      ####    ######  

    Servidor do seu site já está rodando! Acesse: http://${HOST_APP}:${PORTA_APP}

    Ambiente atual: .:${process.env.AMBIENTE_PROCESSO}:.

    Se .:desenvolvimento:. você está se conectando ao banco local.
    Se .:producao:. você está se conectando ao banco remoto.

    Para alterar o ambiente, comente/descomente as linhas 1 ou 2 no arquivo 'app.js'
    `);
});
