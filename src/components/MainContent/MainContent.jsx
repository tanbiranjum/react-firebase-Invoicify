import React from 'react'
import Invoices from '../Invoices/Invoices'
import styled from 'styled-components'
import Invoice from '../Invoice/Invoice'
import InvoiceView from '../InvoiceView/InvoiceView'
import { Routes, Route } from 'react-router-dom'
import Product from '../Product/Product'
import Setting from '../Setting/Setting'
import Client from '../Client/Client'
import Manager from '../Manager/Manager'

function MainContent() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Invoices />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice-view" element={<InvoiceView />} />
        <Route path="/product" element={<Product />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/client" element={<Client />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  width: 85%; //sidebar 15%
  height: 100% !important;
  margin-left: 15%;
  overflow-y: scroll;
`

export default MainContent
