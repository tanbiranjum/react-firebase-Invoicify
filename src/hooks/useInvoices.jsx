import React, { useEffect, useState } from 'react'
import { InvoiceService } from '../services/APIService'
import { useQuery } from 'react-query'

async function getInvoices() {
  const result = await InvoiceService.getAll()
  return result.data
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
