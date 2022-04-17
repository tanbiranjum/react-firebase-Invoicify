import React from 'react'
import { ProductService } from '../services/DatabaseService'
import { useQuery } from 'react-query'

async function getProducts() {
  return await ProductService.getAll()
}

function useProducts() {
  const { data: products, isLoading } = useQuery('products', getProducts)

  return { products, isLoading }
}

export default useProducts
