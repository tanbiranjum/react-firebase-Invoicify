const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct)

module.exports = router
