import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Nav from './Nav'
import { BoxLoader } from '../../components/Loader/BoxLoader'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'


import {
  Container,
  ListContainer,
  Items,
  Item,
  LeftCol,
  RightCol,
  InvoiceId,
  DeliveryDate,
  ClientName,
  TotalPrice,
  IconContainer,
} from './Styles'

import useInvoices from '../../hooks/useInvoices'

function Invoices() {
  const navigate = useNavigate()
  const { data, isLoading } = useInvoices()

  const handleNavigate = (id) => {
    navigate(`/invoice-view/${id}`)
    return
  }
  return (
    <>
      {!isLoading && (
        <Container>
          <Nav count={data.length} />
          <ListContainer>
            <Items>
              {data.map((invoice) => (
                <Item
                  key={invoice.id}
                  onClick={() => {
                    handleNavigate(invoice.id)
                  }}
                >
                  <LeftCol>
                    <InvoiceId>
                      <span>#</span>
                      {invoice.invoiceId}
                    </InvoiceId>
                    <DeliveryDate>
                      Delivery{' '}
                      {dayjs(invoice.deliveryDate).format('MMMM D, YYYY')}
                    </DeliveryDate>
                    <ClientName>{invoice.clientName}</ClientName>
                  </LeftCol>
                  <RightCol>
                    <TotalPrice> &#2547; {invoice.totalPrice}</TotalPrice>
                    <IconContainer>
                      <FaChevronRight />
                    </IconContainer>
                  </RightCol>
                </Item>
              ))}
            </Items>
          </ListContainer>
        </Container>
      )}
      {isLoading && <BoxLoader />}
    </>
  )
}

export default Invoices
