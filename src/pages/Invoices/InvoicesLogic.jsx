import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { BoxLoader } from '../../components/Loader/BoxLoader'
import { InvoiceService } from '../../services/APIService'
import Invoices from './Invoices'

const getInvoices = async (pageNumber) => {
  const {
    data,
    pages: totalPage,
    total,
  } = await InvoiceService.getAll(pageNumber)
  return { data, totalPage, total }
}

function InvoicesLogic() {
  const { pageNumber } = useParams() || 1
  const [page, setPage] = useState(pageNumber)
  const { isLoading, data } = useQuery(
    ['invoices', page],
    () => getInvoices(page),
    { keepPreviousData: true }
  )
  const [pages, setPages] = useState(data?.totalPage)

  return (
    <>
      {!isLoading && (
        <Invoices
          data={data}
          page={page}
          setPage={setPage}
          pages={pages}
        />
      )}
      {isLoading && <BoxLoader />}
    </>
  )
}

export default InvoicesLogic
