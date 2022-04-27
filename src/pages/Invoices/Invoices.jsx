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
import calculatePrice from '../../utils/calculatePrice'

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
                  key={invoice._id}
                  onClick={() => {
                    handleNavigate(invoice._id)
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
                    <TotalPrice>
                      {calculatePrice(
                        invoice.productQuantity,
                        invoice.productRate
                      )}
                    </TotalPrice>
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
