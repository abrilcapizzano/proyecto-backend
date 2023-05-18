const {DataTypes} = require("sequelize")
module.exports = function(connection){

const Productos = connection.define('Productos',{
idproductos:{
    type:DataTypes.INTEGER,
autoIncrement:true,
primaryKey: true
},
productos_precio:{
    type:DataTypes.INTEGER,
    allowNull:true
},
productos_nombre:{
    type:DataTypes.STRING,
    allowNull:true 
},
productos_imagen:{
    type:DataTypes.STRING,
    allowNull:true 
}
},
{
freezeTableName:'productos',
timestamps:false
}
)
return Productos
}
