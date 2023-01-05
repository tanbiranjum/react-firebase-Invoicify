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

/**
 * 1. Product is passing props to AddProduct
 * to handle modal open state
 *
 * 2. currentProduct property state set to null
 * to handle modal create and update state
 */

function Product({ products }) {
  const [searchData, setSearchData] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    price: '',
  })

  return (
    <Container>
      <ProductContainer>
        <Heading>
          {console.log(products)}
          <ProductTitle>Products</ProductTitle>
          <AddProductButton
            onClick={() => {
              // currentProduct set to null to reset this state
              setCurrentProduct({
                id: '',
                price: '',
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
                  if (item.id.includes(searchData)) {
                    return true
                  } else if (searchData === '') return true
                  return false
                })
                .map((item, index) => (
                  <TableRow
                    key={item.id}
                    onClick={() => {
                      setIsOpen(true)
                      setCurrentProduct(item)
                    }}
                  >
                    <TableData>{index + 1}</TableData>
                    <TableData>{item.id}</TableData>
                    <TableData>{item.price}</TableData>
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
