const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')
const managerRoutes = require('./routes/managerRoutes')
const clientRoutes = require('./routes/clientRoutes')
const decodeToken = require('./middlewares/auth')

dotenv.config({ path: './config.env' })

const app = express()

app.use(express.json({ limit: '10kb' }))
app.use(cors())

app.use(decodeToken)

app.get('/', (req, res, next) => {
  res.send('Hello world')
})

app.use('/api/v1/product', productRoutes)
app.use('/api/v1/invoice', invoiceRoutes)
app.use('/api/v1/client', clientRoutes)
app.use('/api/v1/manager', managerRoutes)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

module.exports = app
