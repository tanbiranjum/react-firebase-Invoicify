import React, { useRef } from 'react'
import { FaPrint, FaRedo } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'
import { BoxLoader } from '../../components/Loader/BoxLoader'
import { useReactToPrint } from 'react-to-print'

import {
  Container,
  InvoiceContainer,
  ActionButton,
  PrintButton,
  UpdateButton,
} from './Styles'
import useInvoice from '../../hooks/useInvoice'
import PrintInvoice from './PrintInvoice'

function InvoiceView() {
  // ref for printing component
  const componentRef = useRef()
  const { id } = useParams()
  const navigate = useNavigate()
  const { invoice, isLoading } = useInvoice(id)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const handleUpdate = () => {
    navigate(`/invoice/${id}`)
  }

  if (!invoice) return null
  return (
    <>
      {!isLoading && (
        <Container>
          <ActionButton>
            <PrintButton onClick={handlePrint}>
              <FaPrint /> Print
            </PrintButton>
            <UpdateButton onClick={handleUpdate}>
              <FaRedo /> Update
            </UpdateButton>
          </ActionButton>
          <InvoiceContainer ref={componentRef}>
            <PrintInvoice invoice={invoice} />
          </InvoiceContainer>
        </Container>
      )}
      {isLoading && <BoxLoader />}
    </>
  )
}

export default InvoiceView
