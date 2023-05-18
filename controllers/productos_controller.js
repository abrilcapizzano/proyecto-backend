const {Sequelize} = require ('sequelize');


const connection = require('../database/mysql_connection');
const modelProductos = require('../models/productos.js')(connection);

const productoController = {
    list: (req, res) => {
      modelProductos.findAll({})
        .then((productos) => {
          try {
            res.render('list.hbs', { productos });
          } catch (error) {
            console.error(error);
            // Handle the error as needed, e.g., show an error page or send an error response
          }
        })
        .catch((error) => {
          console.error(error);
          // Handle the error as needed
        });
    }
  };


module.exports = productoController;