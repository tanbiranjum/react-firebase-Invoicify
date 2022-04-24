const express = require('express')
const invoiceController = require('../controllers/invoiceController')

const router = express.Router()

router
  .route('/:id')
  .get(invoiceController.getInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice)

router
  .route('/')
  .get(invoiceController.getInvoices)
  .post(invoiceController.createInvoice)

module.exports = router
