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
}

module.exports = new UsuariosController();