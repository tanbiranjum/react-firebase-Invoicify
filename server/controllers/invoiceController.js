const Invoice = require('../models/Invoice')

exports.getInvoice = async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id)
  res.status(201).json({
    data: invoice,
  })
}

exports.getInvoices = async (req, res, next) => {
  const invoices = await Invoice.find()
  res.status(200).json({
    data: invoices,
  })
}

exports.createInvoice = async (req, res, next) => {
  const data = req.body
  const newInvoice = await Invoice.create(data)
  res.status(201).json({
    data: newInvoice,
  })
}

exports.deleteInvoice = async (req, res, next) => {
  await Invoice.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
  })
}

exports.updateInvoice = async (req, res, next) => {
  const data = req.body
  const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedInvoice,
  })
}
