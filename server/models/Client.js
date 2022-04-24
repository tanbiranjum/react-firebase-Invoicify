const mongoose = require('mongoose')
const { Schema } = mongoose

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'should have a name'],
  },
  mobile: {
    type: String,
    required: [true, 'should have a number'],
    unique: true,
  },
  address: {
    type: String,
    required: [true, 'should have a address'],
  },
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client
