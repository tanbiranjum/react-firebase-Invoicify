const fs = require('fs')
const Product = require('../models/Product')
const productData = require('../data/Product-data.json')

exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  res.status(201).json({
    data: product,
  })
}

exports.getProducts = async (req, res, next) => {
  const products = await Product.find()
  res.status(200).json({
    data: products,
  })
}

exports.createProduct = async (req, res, next) => {
  const data = req.body
  const newProduct = await Product.create(data)
  res.status(201).json({
    data: newProduct,
  })
}

exports.deleteProduct = async (req, res, next) => {
  const products = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({
    data: products,
  })
}

exports.updateProduct = async (req, res, next) => {
  const data = req.body
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, data)
  res.status(201).json({
    data: updatedProduct,
  })
}
