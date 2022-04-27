const mongoose = require('mongoose')
const { Schema } = mongoose

const clientSchema = new Schema({
  clientName: {
    type: String,
    required: [true, 'should have a name'],
  },
  clientMobile: {
    type: String,
    required: [true, 'should have a number'],
    unique: true,
  },
  clientAddress: {
    type: String,
    required: [true, 'should have a address'],
  },
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client
