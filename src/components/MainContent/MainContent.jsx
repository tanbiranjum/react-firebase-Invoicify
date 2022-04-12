import React from 'react'
import Invoices from '../../pages/Invoices/Invoices'
import styled from 'styled-components'
import Invoice from '../../pages/Invoice/Invoice'
import InvoiceView from '../../pages/InvoiceView/InvoiceView'
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Product from '../../pages/Product/Product'
import Setting from '../../pages/Setting/Setting'
import Client from '../../pages/Client/Client'
import Manager from '../../pages/Manager/Manager'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'
import { useAuth } from '../../contexts/AuthContext'

function MainContent() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Invoices />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="invoice/:id" element={<Invoice />} />
          <Route path="invoice-view/:id" element={<InvoiceView />} />
          <Route path="product" element={<Product />} />
          <Route path="manager" element={<Manager />} />
          <Route path="client" element={<Client />} />
          <Route path="setting" element={<Setting />} />
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
