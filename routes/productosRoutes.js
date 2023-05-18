const express = require ("express");
const router = express.Router();

const productosController = require ('../controllers/productos_controller');


router.get ('/', productosController.list);

module.exports = router