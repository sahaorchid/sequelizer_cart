const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database')
const { Product } = require('./Product')

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

async function getAllProduct(){
    try{
        console.log("jm")
        const data = await Cart.findAll({
            include: Product,
            where:{id:1}
        });
    console.log(data)    
    return data
    }catch(err){
        console.log("jmmhv")
        console.log(err)
    }
} 


module.exports = {
    Cart,
    getAllProduct,
}

