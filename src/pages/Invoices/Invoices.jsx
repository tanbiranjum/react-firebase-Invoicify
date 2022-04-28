import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Nav from './Nav'
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

import calculatePrice from '../../utils/calculatePrice'
import Pagination from '../../components/Pagination/Pagination'

function Invoices({ data, page, setPage, pages }) {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/invoice-view/${id}`)
    return
  }

  return (
    <Container>
      <Nav count={data.total} />
      <ListContainer>
        <Items>
          {data.data.map((invoice) => (
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
                  Delivery {dayjs(invoice.deliveryDate).format('MMMM D, YYYY')}
                </DeliveryDate>
                <ClientName>{invoice.clientName}</ClientName>
              </LeftCol>
              <RightCol>
                <TotalPrice>
                  &#2547;{' '}
                  {calculatePrice(invoice.productQuantity, invoice.productRate)}
                </TotalPrice>
                <IconContainer>
                  <FaChevronRight />
                </IconContainer>
              </RightCol>
            </Item>
          ))}
        </Items>
      </ListContainer>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </Container>
  )
}

export default Invoices
