var express = require('express');
var router = express.Router();

// Obtener página de historia
router.get('/', function(req, res, next) {
  res.render('historia');
});

module.exports = router;