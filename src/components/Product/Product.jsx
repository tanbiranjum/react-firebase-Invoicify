import { collection, query, getDocs, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import db from '../../firebaseConfig'

function Product() {
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
      productsData.push({ product_code, product_rate })
    })
    setProducts(productsData)
    // alert(searchInput)
  }
  useEffect(() => {
    async function getProducts() {
      const productsData = []
      const productRef = collection(db, 'products')
      const q = query(productRef)
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const { product_code, product_rate } = doc.data()
        productsData.push({ product_code, product_rate })
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
          <AddProductButton>Add product</AddProductButton>
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
                <TableRow key={item.product_code}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{item.product_code}</TableData>
                  <TableData>{item.product_rate}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </ProductContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const ProductContainer = styled.div`
  width: 55%;
  margin: 0 auto;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  margin-top: 5rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

const ProductTitle = styled.h2`
  font-size: 2rem;
  color: #5c64dd;
  font-weight: 500;
`

const AddProductButton = styled.button`
  border: none;
  padding: 1rem 3rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0.5rem;
`
const SearchContainer = styled.form`
  display: flex;
  gap: 3rem;
  padding: 0 2rem 2rem 2rem;
  background-color: #ffffff;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 0 1rem;
  border: 2px solid gray;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: 2px solid #5c64dd;
  }
`

const SearchButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0.5rem;
`

const TableContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 2rem 2rem 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #b7bbf0;
  }
`

const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

const TableData = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

export default Product
