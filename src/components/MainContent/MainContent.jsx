import React from 'react'
import Invoices from '../../pages/Invoices/Invoices'
import styled from 'styled-components'
import InvoiceView from '../../pages/InvoiceView/InvoiceView'
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Manager from '../../pages/Manager/Manager'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'
import { useAuth } from '../../contexts/AuthContext'
import InvoiceRenderLogic from '../../pages/Invoice/InvoiceRenderLogic'
import ProductLogic from '../../pages/Product/ProductLogic'
import ClientLogic from '../../pages/Client/ClientLogic'

function MainContent() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Invoices />} />
          <Route path="invoice" element={<InvoiceRenderLogic />} />
          <Route path="invoice/:id" element={<InvoiceRenderLogic />} />
          <Route path="invoice-view/:id" element={<InvoiceView />} />
          <Route path="product" element={<ProductLogic />} />
          {/* <Route path="manager" element={<Manager />} /> */}
          <Route path="client" element={<ClientLogic />} />
          {/* <Route path="setting" element={<Setting />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Container>
  )
}

function ProtectedRoute() {
  const { currentUser } = useAuth()
  const location = useLocation()

  if (
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/reset-password'
  ) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? '/'} />
    ) : (
      <Outlet />
    )
  }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  )
}

const Container = styled.div`
  width: 85%; //sidebar 15%
  height: 100% !important;
  margin-left: 15%;
  overflow-y: scroll;
`

export default MainContent
