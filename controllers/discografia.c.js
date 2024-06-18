const { CancionesNotablesDB, EpDB, SencillosDB, AlbumesDB } = require('../models/discografia.m');

//Se realiza un constructor para simplificar el uso de las 4 tablas en un solo controlador
class Discografia {
  constructor() {
    this.cancionesNotablesDB = new CancionesNotablesDB();
    this.epDB = new EpDB();
    this.sencillosDB = new SencillosDB();
    this.albumesDB = new AlbumesDB();
  }

  //obtener los datos de las tablas - Cristhofer Solarte
  async obtenerCancionesNotables() {
    try {
      return await this.cancionesNotablesDB.obtenerCancionesNotables();
    } catch (error) {
      throw error;
    }
  }

  async obtenerEp() {
    try {
      return await this.epDB.obtenerEp();
    } catch (error) {
      throw error;
    }
  }

  async obtenerSencillos() {
    try {
      return await this.sencillosDB.obtenerSencillos();
    } catch (error) {
      throw error;
    }
  }

  async obtenerAlbumes() {
    try {
      return await this.albumesDB.obtenerAlbumes();
    } catch (error) {
      throw error;
    }
  }

//Obtener datos según el nombre - Verónica Parra
  async buscarPorNombre(nombre) {
    try {
      // Inicialmente busca en canciones notables
      const cancionesNotables = await this.cancionesNotablesDB.buscarPorNombre(nombre);
      
      // Si encuentra resultados en canciones notables, retorna esos resultados
      if (cancionesNotables.length > 0) {
        return cancionesNotables;
      }
  
      // Si no encuentra resultados en canciones notables, busca en ep
      const ep = await this.epDB.buscarPorNombre(nombre);
      
      // Si encuentra resultados en ep, retorna esos resultados
      if (ep.length > 0) {
        return ep;
      }
  
      // Si no encuentra resultados en ep, busca en sencillos
      const sencillos = await this.sencillosDB.buscarPorNombre(nombre);
      
      // Si encuentra resultados en sencillos, retorna esos resultados
      if (sencillos.length > 0) {
        return sencillos;
      }
  
      // Si no encuentra resultados en sencillos, busca en álbumes
      const albumes = await this.albumesDB.buscarPorNombre(nombre);
      
      // Retorna los resultados de álbumes (pueden ser vacíos si no encuentra nada)
      return albumes;
  
    } catch (error) {
      throw error;
    }
  }  
}

module.exports = new Discografia();