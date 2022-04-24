const Manager = require('../models/Manager')

exports.getManager = async (req, res, next) => {
  const manager = await Manager.findById(req.params.id)
  res.status(201).json({
    data: manager,
  })
}

exports.getManagers = async (req, res, next) => {
  const managers = await Manager.find()
  res.status(200).json({
    data: managers,
  })
}

exports.createManager = async (req, res, next) => {
  const data = req.body
  const newManager = await Manager.create(data)
  res.status(201).json({
    data: newManager,
  })
}

exports.deleteManager = async (req, res, next) => {
  await Manager.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
  })
}

exports.updateManager = async (req, res, next) => {
  const data = req.body
  const updatedManager = await Manager.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedManager,
  })
}
