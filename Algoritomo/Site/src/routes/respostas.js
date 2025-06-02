var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/estatisticas", function(req, res) {
    respostaController.obterEstatisticas(req, res);
});

module.exports = router;
