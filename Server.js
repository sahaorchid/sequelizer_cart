const express = require('express')
const cors = require('cors')
const bodyParser  = require('body-parser')
const sequelize  = require('./config/Database')
const { getProduct } = require('./controllers/Cart')

async function check(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
check()

const app = express()
app.use(cors())
app.use(cors())
app.use(bodyParser.json());

app.get('/cart',getProduct)




app.listen(5000,()=>console.log('server setarted'))