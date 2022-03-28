import React from 'react'
import styled from 'styled-components'
import MainContent from '../MainContent/MainContent'
import SideBar from '../SideBar/SideBar'

import { Routes, Route } from 'react-router-dom'
import Product from '../Product/Product'

import Invoice from '../Invoice/Invoice'
import InvoiceView from '../InvoiceView/InvoiceView'

function Layout() {
  return (
    <Container>
      <SideBar />
      <MainContent />
    </Container>
  )
}

const Container = styled.div`
  background-color: ${(props) => props.theme.appDefaultBackground};
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`

export default Layout
