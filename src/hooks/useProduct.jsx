import React from 'react'
import { ProductService } from '../services/APIService'

function useProduct(id) {
  const getProduct = async () => {
    const {data} = await ProductService.getOne(id)
    return data
  }
  const createProduct = async (data) => {
    const result = await ProductService.createDoc(data)
    return result.data
  }
  const updateProduct = async () => {}
  const deleteProduct = async () => {}
  return { getProduct, createProduct, updateProduct, deleteProduct }
}

export default useProduct
