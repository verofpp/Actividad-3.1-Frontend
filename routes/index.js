var express = require('express');
var router = express.Router();

// Obtener página de Inicio
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;