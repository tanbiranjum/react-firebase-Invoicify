import React from 'react'
import useProducts from '../../hooks/useProducts'
import Product from './Product'

function ProductLogic() {
  const { products, isLoading } = useProducts()
  return <>{!isLoading && <Product products={products} />}</>
}

export default ProductLogic
