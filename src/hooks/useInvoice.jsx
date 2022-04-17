import React from 'react'
import { InvoiceService } from '../services/DatabaseService'
import { useQuery } from 'react-query'

function useInvoice(id) {
  const { data, isLoading } = useQuery(
    ['invoices', { id }],
    InvoiceService.getOne
  )

  const invoice = data

  const updateInvoice = async (data) => {
    await InvoiceService.updateDoc(id, data)
  }

  return { invoice, updateInvoice, isLoading }
}

export default useInvoice
