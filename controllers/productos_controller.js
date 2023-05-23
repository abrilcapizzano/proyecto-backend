const connection = require('../database/mysql_connection');
const modelProductos = require('../models/productos.js');


const productosController = {
  list: (req, res) => {
    modelProductos.findAll({})
      .then((productos) => {
        try {
          res.render('list.hbs', { productos });
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

module.exports = productosController;
