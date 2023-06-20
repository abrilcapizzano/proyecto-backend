const modelProductos = require('../models/productos.js');
const usuariosValidos = [
  { nombre: 'Abril', email: 'usuario1@ejemplo.com', password: 'contraseña' }
];

const productosController = {
  home: (req, res) => {
    const { nombre, email, password } = req.body;

    // Verificar las credenciales de inicio de sesión
    const usuarioValido = usuariosValidos.find(
      (usuario) =>
        usuario.nombre === nombre &&
        usuario.email === email &&
        usuario.password === password
    );

    if (usuarioValido) {
      // Credenciales válidas, redirigir a '/list'
      res.redirect('/list');
    } else {
      // Credenciales inválidas, mostrar un mensaje de error
      res.render('home.hbs', { error: 'Credenciales inválidas' });
    }
  },
  list: (req, res) => {
    modelProductos
      .findAll({})
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
  },
};

module.exports = productosController;
