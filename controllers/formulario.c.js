const UsuariosDB = require('../models/formulario.m');

class UsuariosController {
//obtener los datos de la tabla - Cristhofer Solarte
  async obtenerUsuarios() {
    try {
      return await UsuariosDB.obtenerUsuarios();
    } catch (error) {
      throw error;
    }
  }

//Agregar datos - Verónica Parra
  async agregarUsuario(nombre, email, resena) {
    try {
      return await UsuariosDB.agregarUsuario(nombre, email, resena);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsuariosController();