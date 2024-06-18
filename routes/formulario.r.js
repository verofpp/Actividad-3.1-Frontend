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