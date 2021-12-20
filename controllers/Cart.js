const { getAllProduct } = require('../models/Cart')

function getProduct(req,res){
    const product = getAllProduct()
    console.log(product)
    product.then((data)=>{
         res.status(200).json({
         message: "successfully fetched",
         data: data })
    })
}

module.exports = {
    getProduct
}