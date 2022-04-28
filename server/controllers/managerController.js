const Manager = require('../models/Manager')
const catchAsync = require('../utils/catchAsync')

exports.getManager = catchAsync(async (req, res, next) => {
  const manager = await Manager.findById(req.params.id)
  res.status(201).json({
    data: manager,
  })
})

exports.getManagers = catchAsync(async (req, res, next) => {
  const managers = await Manager.find()
  res.status(200).json({
    data: managers,
  })
})

exports.createManager = catchAsync(async (req, res, next) => {
  const data = req.body
  const newManager = await Manager.create(data)
  res.status(201).json({
    data: newManager,
  })
})

exports.deleteManager = catchAsync(async (req, res, next) => {
  await Manager.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
  })
})

exports.updateManager = catchAsync(async (req, res, next) => {
  const data = req.body
  const updatedManager = await Manager.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedManager,
  })
})
