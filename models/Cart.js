const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database')

const Cart = sequelize.define('Cart',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ProductId:{
        type: Sequelize.INTEGER,
    },
    quantity: { 
        type: Sequelize.INTEGER,
        },
},{
    timestamps: false
}, {})

Cart.associate = models=>{
    Cart.hasMany(models.Product,{
        foreignKey: 'ProductId'
    })
}



module.exports = Cart


