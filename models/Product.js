const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database')

const Product = sequelize.define('Product',{
    id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    name: { 
        type: Sequelize.STRING,
    },
    description: { 
        type: Sequelize.STRING,
    },
    price: { 
        type: Sequelize.INTEGER,
    },
    image: { 
        type: Sequelize.STRING,
    }
},{
timestamps: false
}, {})

Product.associate = models=>{
    Product.belongsTo(models.Cart,{
    })
}

module.exports = Product   
