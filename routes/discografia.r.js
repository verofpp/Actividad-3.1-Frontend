var express = require('express');
var router = express.Router();
var discografia = require('../controllers/discografia.c');

// Obtener página de discografía
router.get('/', async function(req, res, next) {
  try {
    const cancionesNotables = await discografia.obtenerCancionesNotables();
    const ep = await discografia.obtenerEp();
    const sencillos = await discografia.obtenerSencillos();
    const albumes = await discografia.obtenerAlbumes();

    res.render('discografia', { 
      cancionesNotables: cancionesNotables,
      ep: ep,
      sencillos: sencillos,
      albumes: albumes
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Obtener según la tabla
router.get('/buscar/cancionesnotables', async function(req, res, next) {
  try {
    const resultado = await discografia.obtenerCancionesNotables();
    res.render( 'resultados', { resultado });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;