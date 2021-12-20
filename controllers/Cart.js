const Cart = require('../models/Cart')
const Product = require('../models/Product')


async function getProduct(req,res){
    try{
        const data = await Cart.findAll({
            include: Product,
            where:{id:1}
        });
        res.status(200).json({
            message: "successfully fetched",
            data: data })

    }catch(err){
        console.log("jmmhv")
        console.log(err)
    }
}



module.exports = {
    getProduct
}
