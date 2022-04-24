const mongoose = require('mongoose')
const { Schema } = mongoose

const managerSchema = new Schema({
  id: {
    type: String,
    required: [true, 'should have a id'],
  },
  name: {
    type: String,
    required: [true, 'should have a name'],
  },
})

const Manager = mongoose.model('Manager', managerSchema)

module.exports = Manager
