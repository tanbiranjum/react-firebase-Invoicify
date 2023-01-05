import React from 'react'
import { InvoiceService } from '../services/APIService'
import { useQuery } from 'react-query'

async function getInvoice(id) {
  const {data} = await InvoiceService.getOne(id)
  return data
}

function useInvoice(id) {
  const { data, isLoading } = useQuery(
    ['invoices', { id }],
    getInvoice
  )

  const invoice = data

  const updateInvoice = async (data) => {
    await InvoiceService.updateDoc(id, data)
  }

  return { invoice, updateInvoice, isLoading }
}

export default useInvoice
