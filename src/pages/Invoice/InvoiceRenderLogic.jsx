import React from 'react'
import { useParams } from 'react-router-dom'
import { BoxLoader } from '../../components/Loader/BoxLoader'
import useInvoice from '../../hooks/useInvoice'
import useProducts from '../../hooks/useProducts'
import Invoice from './Invoice'

function InvoiceRenderLogic() {
  const { id } = useParams()
  const { products } = useProducts()

  if (!id) {
    return <Invoice editmode={false} products={products} />
  }

  const { invoice, isLoading } = useInvoice(id)

  return (
    <>
      {!isLoading && (
        <Invoice values={invoice} products={products} editmode={true} />
      )}
      {isLoading && <BoxLoader />}
    </>
  )
}

export default InvoiceRenderLogic
