const Client = require('../models/Client')

exports.getClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id)
  res.status(201).json({
    data: client,
  })
}

exports.getClients = async (req, res, next) => {
  const clients = await Client.find()
  res.status(200).json({
    data: clients,
  })
}

exports.createClient = async (req, res, next) => {
  const data = req.body
  const newClient = await Client.create(data)
  res.status(201).json({
    data: newClient,
  })
}

exports.deleteClient = async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
  })
}

exports.updateClient = async (req, res, next) => {
  const data = req.body
  const updatedClient = await Client.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedClient,
  })
}
