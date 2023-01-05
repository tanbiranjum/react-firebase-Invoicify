import React, { useEffect, useState } from 'react'
import { InvoiceService } from '../services/APIService'
import { useQuery } from 'react-query'

async function getInvoices(pageNumber) {
  const { data, pages: totalPage, total } = await InvoiceService.getAll(pageNumber)
  return { data, totalPage, total }
  // setInvoices(invoices)
  // setIsLoading(false)
}

function useInvoices(pageNumber) {
  // const [invoices, setInvoices] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const { isLoading, data } = useQuery('invoices', () => getInvoices(pageNumber))
  return { data, isLoading }
}

export default useInvoices
