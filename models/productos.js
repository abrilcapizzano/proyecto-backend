const { DataTypes } = require('sequelize');
const connection = require('../database/mysql_connection');

const Productos = connection.define('productos', {
  idproductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  productos_nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productos_precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  productos_imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'productos',
  timestamps: false
});

module.exports = Productos;
