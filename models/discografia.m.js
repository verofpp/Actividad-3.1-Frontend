const conexion = require('./conexion');

//Modelo Tabla Canciones Notables

class CancionesNotablesDB {
//Consulta para obtener todos los datos de la tabla - Verónica Parra
  obtenerCancionesNotables() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * from `canciones notables`', function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

//Consulta para obtener datos según el nombre - Verónica Parra
  buscarPorNombre(nombre) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM `canciones notables` WHERE Nombre LIKE ?', [nombre + '%'], function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

//Modelo Tabla Sencillos

//Consulta para obtener todos los datos de la tabla - Verónica Parra
class SencillosDB {
  obtenerSencillos() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * from `sencillos`', function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

  //Consulta para obtener datos según el nombre - Verónica Parra
  buscarPorNombre(nombre) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM `sencillos` WHERE Nombre LIKE ?', [nombre + '%'], function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = {
  CancionesNotablesDB,
  SencillosDB
};