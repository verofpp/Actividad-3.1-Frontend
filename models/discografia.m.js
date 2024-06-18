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

//Modelo Tabla EP

//Consulta para obtener todos los datos de la tabla - Cristhofer Solarte
class EpDB {
  obtenerEp() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * from `ep`', function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

//Consulta para obtener datos solo según el nombre - Cristhofer Solarte
  buscarPorNombre(nombre) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM `ep` WHERE Nombre LIKE ?', [nombre + '%'], function (error, results, fields) {
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

//Modelo Tabla Álbumes

//Consulta para obtener todos los datos de la tabla - Cristhofer Solarte
class AlbumesDB {
  obtenerAlbumes() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * from `albumes`', function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

  //Consulta para obtener datos según el nombre - Cristhofer Solarte
  buscarPorNombre(nombre) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM `albumes` WHERE Nombre LIKE ?', [nombre + '%'], function (error, results, fields) {
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
  EpDB,
  SencillosDB,
  AlbumesDB
};