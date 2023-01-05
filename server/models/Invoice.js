const mongoose = require('mongoose')
const { Schema } = mongoose

const invoiceSchema = new Schema({
  invoiceId: {
    type: String,
    // required: [true, 'should have a id'],
  },
  docNo: {
    type: String,
    // required: [true, 'should have a name'],
  },
  clientName: {
    type: String,
    // required: [true, 'should have a name'],
  },
  clientMobile: {
    type: String,
    // required: [true, 'should have a number'],
  },
  clientAddress: {
    type: String,
    // required: [true, 'should have a address'],
  },
  code: {
    type: String,
    // required: [true, 'should have a address'],
  },
  manager: {
    type: String,
    // required: [true, 'should have a address'],
  },
  productSize: {
    type: String,
    // required: [true, 'should have a address'],
  },
  productVariation: {
    type: String,
    // required: [true, 'should have a address'],
  },
  productQuantity: {
    type: String,
    // required: [true, 'should have a address'],
  },
  productRate: {
    type: String,
    // required: [true, 'should have a address'],
  },
  products: [
    {
      id: String,
      description: String,
      productColor: String,
    },
  ],
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice