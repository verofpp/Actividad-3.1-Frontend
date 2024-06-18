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
}

  module.exports = new Discografia();  