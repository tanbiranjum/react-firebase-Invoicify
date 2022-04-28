const Invoice = require('../models/Invoice')
const catchAsync = require('../utils/catchAsync')

exports.getInvoice = catchAsync(async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id)
  res.status(201).json({
    data: invoice,
  })
})

exports.getInvoices = catchAsync(async (req, res, next) => {
  console.log(req)
  let query = Invoice.find()

  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.limit) || 10
  const skip = (page - 1) * pageSize
  const total = await Invoice.countDocuments()

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
    status: 'success',
    count: result.length,
    total,
    page,
    pages,
    data: result,
  })
})

exports.createInvoice = catchAsync(async (req, res, next) => {
  const data = req.body
  const newInvoice = await Invoice.create(data)
  res.status(201).json({
    data: newInvoice,
  })
})

exports.deleteInvoice = catchAsync(async (req, res, next) => {
  await Invoice.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
  })
})

exports.updateInvoice = catchAsync(async (req, res, next) => {
  const data = req.body
  const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedInvoice,
  })
})
