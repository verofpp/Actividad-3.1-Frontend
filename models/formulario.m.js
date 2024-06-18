const conexion = require('./conexion');

class UsuariosDB {
//Obtener todos los datos de la tabla  - Cristhofer Solarte
  obtenerUsuarios() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM `usuarios`', function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = new UsuariosDB();