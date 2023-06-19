const {Sequelize} = require ('sequelize');
const express = require ('express')
const app = express()
const port = 5000;
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
app.use(express.urlencoded({ extended: false }));

const productosRoutes = require('./routes/productosRoutes.js');

app.use('/', productosRoutes);
app.set('view engine', 'hbs');
app.use("/assets", express.static(__dirname + "/public"));
