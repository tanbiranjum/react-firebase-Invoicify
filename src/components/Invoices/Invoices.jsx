import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

function Invoices() {
  return (
    <Container>
      <Nav />
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  /* height: 90%; */
  margin: 4rem auto 0 auto;
`

export default Invoices
