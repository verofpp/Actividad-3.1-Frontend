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

//Agregar datos de la tabla  - Verónica Parra
  async agregarUsuario(nombre, email, resena) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO `usuarios` (Nombre, Email, Reseña) VALUES (?, ?, ?)';
      conexion.query(query, [nombre, email, resena], function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = new UsuariosDB();