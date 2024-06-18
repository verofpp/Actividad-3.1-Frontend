var express = require('express');
var router = express.Router();

// Obtener página de integrantes
router.get('/', function(req, res, next) {
  res.render('integrantes');
});

module.exports = router;