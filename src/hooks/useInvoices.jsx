import React, { useEffect, useState } from 'react'
import { InvoiceService } from '../services/DatabaseService'
import { useQuery } from 'react-query'

async function getInvoices() {
  return await InvoiceService.getAll()
  // setInvoices(invoices)
  // setIsLoading(false)
}

function useInvoices() {
  // const [invoices, setInvoices] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const {isLoading, data} = useQuery('invoices', getInvoices)
  return { data, isLoading }
}

export default useInvoices
