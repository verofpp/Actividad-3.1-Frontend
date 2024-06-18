const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/formulario.c');

//Obtener página de formulario
router.get('/', async function(req, res, next) {
  try {
    const usuarios = await usuariosController.obtenerUsuarios();
    res.render('formulario', { usuarios });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Agregar datos del formulario
router.post('/agregar', async function(req, res, next) {
  const { nombre, email, resena } = req.body;

  try {
    await usuariosController.agregarUsuario(nombre, email, resena);
    res.redirect('/formulario'); // Redirige a la página de usuarios después de agregar
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;