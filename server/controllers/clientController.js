const Client = require('../models/Client')

exports.getClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id)
  res.status(201).json({
    data: client,
  })
}

exports.getClients = async (req, res, next) => {
  let query = Client.find()

  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.limit) || 4
  const skip = (page - 1) * pageSize
  const total = await Client.countDocuments()

  const pages = Math.ceil(total / pageSize)

  query = query.skip(skip).limit(pageSize)

  if (page > pages) {
    return res.status(404).json({
      status: 'failed',
      message: 'No page found',
    })
  }

  const result = await query
  res.status(200).json({
    data: result,
  })
}

const getClientByMobile = async (req, res, next) => {
  
}

exports.createClient = async (req, res, next) => {
  const data = req.body
  try {
    const newClient = await Client.create(data)
    res.status(201).json({
      status: 'success',
      data: newClient,
    })
  } catch (error) {
    res.status(406).json({
      status: 'failed',
      message: error,
    })
  }
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
