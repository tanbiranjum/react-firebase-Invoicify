const { createServer } = require('http')
const app = require('./app')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000

const MONGO_URL = `mongodb+srv://invoicify:${process.env.MONGODB_PASS}@cluster0.9c5j0.mongodb.net/invoicify?retryWrites=true&w=majority`

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready!')
})

mongoose.connection.once('error', () => {
  console.error('Connection is failed')
})

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    autoIndex: true,
  })
  const server = createServer(app)

  server.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })
}

startServer()
