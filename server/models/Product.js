const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  id: {
    type: String,
    required: [true, 'should have a id'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'should have a price'],
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
