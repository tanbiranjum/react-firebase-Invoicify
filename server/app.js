const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')
const managerRoutes = require('./routes/managerRoutes')
const clientRoutes = require('./routes/clientRoutes')

dotenv.config({ path: './config.env' })

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('Hello world')
})

app.use('/api/v1/product', productRoutes)
app.use('/api/v1/invoice', invoiceRoutes)
app.use('/api/v1/client', clientRoutes)
app.use('/api/v1/manager', managerRoutes)

module.exports = app
