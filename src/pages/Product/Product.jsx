import { collection, query, getDocs, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

import db from '../../firebaseConfig'
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
  NoProductTitle
} from './Styles'

/**
 * 1. Product is passing props to AddProduct
 * to handle modal open state
 *
 * 2. currentProduct property state set to null
 * to handle modal create and update state
 */

function Product() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({
    product_code: '',
    product_rate: '',
  })
  const [products, setProducts] = useState([])
  const handleSearch = async (e) => {
    e.preventDefault()
    const productsData = []
    const searchInput = e.target.elements.searchInput.value
    const productRef = collection(db, 'products')
    const q = query(productRef, where('product_code', '==', searchInput))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const { product_code, product_rate } = doc.data()
      productsData.push({ doc_id: doc.id, product_code, product_rate })
    })
    setProducts(productsData)
  }
  useEffect(() => {
    async function getProducts() {
      const productsData = []
      const productRef = collection(db, 'products')
      const q = query(productRef)
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const { product_code, product_rate } = doc.data()
        const doc_id = doc.id
        productsData.push({ doc_id, product_code, product_rate })
      })
      setProducts(productsData)
      //   setLoaded(true)
    }
    getProducts()
  }, [])
  return (
    <Container>
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
        <SearchContainer onSubmit={handleSearch}>
          <SearchInput id="searchInput" />
          <SearchButton type="submit">Search Product</SearchButton>
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
              {products.map((item, index) => (
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
