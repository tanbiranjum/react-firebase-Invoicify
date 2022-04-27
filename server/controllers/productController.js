const Product = require('../models/Product')

exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  res.status(201).json({
    status: 'success',
    data: product,
  })
}

exports.getProducts = async (req, res, next) => {
  const products = await Product.find()
  res.status(200).json({
    status: 'success',
    data: products,
  })
}

exports.createProduct = async (req, res, next) => {
  const data = req.body
  console.log(data)
  const newProduct = await Product.create(data)
  res.status(201).json({
    status: 'success',
    data: newProduct,
  })
}

exports.deleteProduct = async (req, res, next) => {
  const products = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'success',
    data: products,
  })
}

exports.updateProduct = async (req, res, next) => {
  const data = req.body
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, data)
    res.status(201).json({
      status: 'success',
      data: updatedProduct,
    })
  } catch (error) {
    res.status(406).json({
      status: 'failed',
      message: error,
    })
  }
}
