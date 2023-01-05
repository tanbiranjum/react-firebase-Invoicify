import React from 'react'
import { ProductService } from '../services/APIService'
import { useQuery } from 'react-query'

async function getProducts() {
  const {data} = await ProductService.getAll()
  return data
}

function useProducts() {
  const { data: products, isLoading } = useQuery('products', getProducts)

  return { products, isLoading }
}

export default useProducts
