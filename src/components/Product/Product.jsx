import React from 'react'
import styled from 'styled-components'

function Product() {
  return (
    <Container>
      <ProductContainer>
        <Heading>
          <ProductTitle>Products</ProductTitle>
          <AddProductButton>Add product</AddProductButton>
        </Heading>
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
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  margin-top: 5rem;
`

const ProductTitle = styled.h2`
  font-size: 2rem;
  color: #5c64dd;
  font-weight: 500;
`

const AddProductButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: .5px;
  border-radius: 0.5rem;
`

export default Product
