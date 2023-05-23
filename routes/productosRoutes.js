const express = require("express");
const router = express.Router();
const Productos = require('../models/productos');
const productosController = require('../controllers/productos_controller');

router.get('/', productosController.list);

router.post('/save', (req, res) => {
  const { productos_nombre, productos_precio, productos_imagen } = req.body;
  
  Productos.create({
    productos_nombre,
    productos_precio,
    productos_imagen
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error al guardar el producto');
    });
});


router.post('/update', (req, res) => {
  const { productos_nombre, productos_precio, idproductos } = req.body;

  Productos.update(
    { productos_nombre: productos_nombre, productos_precio: productos_precio },
    { where: { idproductos: idproductos } }
  )
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error al actualizar el producto');
    });
});


router.post('/delete', (req, res) => {
  const { idproductos} = req.body;

  Productos.destroy({
    where: { idproductos: idproductos }
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error al eliminar el producto');
    });
});



module.exports = router;
