import React, { useState } from 'react'
import AddProduct from '../../components/Modal/AddProduct'

import {
  Container,
  ProductContainer,
  Heading,
  ProductTitle,
  AddProductButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  TableContainer,
  Table,
  TableRow,
  TableHeader,
  TableData,
  NoProduct,
  NoProductTitle,
} from './Styles'
import useProducts from '../../hooks/useProducts'

/**
 * 1. Product is passing props to AddProduct
 * to handle modal open state
 *
 * 2. currentProduct property state set to null
 * to handle modal create and update state
 */

function Product() {
  const [searchData, setSearchData] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { products, isLoading } = useProducts()
  const [currentProduct, setCurrentProduct] = useState({
    product_code: '',
    product_rate: '',
  })

  return (
    <Container>
      {!isLoading && (
        <ProductContainer>
          <Heading>
            <ProductTitle>Products</ProductTitle>
            <AddProductButton
              onClick={() => {
                // currentProduct set to null to reset this state
                setCurrentProduct({
                  product_code: '',
                  product_rate: '',
                })
                setIsOpen(true)
              }}
            >
              Add product
            </AddProductButton>
          </Heading>
          <SearchContainer>
            <SearchInput
              type="text"
              id="searchInput"
              onChange={(e) => {
                setSearchData(e.target.value)
              }}
            />
          </SearchContainer>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>No</TableHeader>
                  <TableHeader>Code</TableHeader>
                  <TableHeader>Rate</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {products
                  .filter((item) => {
                    if (item.product_code.includes(searchData)) {
                      return true
                    } else if (searchData === '') return true
                    return false
                  })
                  .map((item, index) => (
                    <TableRow
                      key={item.product_code}
                      onClick={() => {
                        setIsOpen(true)
                        setCurrentProduct(item)
                      }}
                    >
                      <TableData>{index + 1}</TableData>
                      <TableData>{item.product_code}</TableData>
                      <TableData>{item.product_rate}</TableData>
                    </TableRow>
                  ))}
              </tbody>
            </Table>
          </TableContainer>
          {products.length === 0 && (
            <NoProduct>
              <NoProductTitle>No product found.</NoProductTitle>
            </NoProduct>
          )}
        </ProductContainer>
      )}
      <AddProduct
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false)
        }}
        product={currentProduct}
      />
    </Container>
  )
}

export default Product
