import React, { useRef } from 'react'
import { FaPrint, FaRedo } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'
import { BoxLoader } from '../../components/Loader/BoxLoader'
import { useReactToPrint } from 'react-to-print'

import {
  Container,
  InvoiceContainer,
  InvoiceRow,
  ColumnTwo,
  ColumnThree,
  BillId,
  DocNo,
  CompanyName,
  CompanyAddress,
  ColumnHeading,
  InvoiceDate,
  ClientName,
  ClientMobile,
  ClientAddress,
  InvoiceCode,
  Manager,
  TableContainer,
  Table,
  TableRow,
  TableHeader,
  TableData,
  AmountContainer,
  Amount,
  AmountTitle,
  ActionButton,
  PrintButton,
  UpdateButton,
} from './Styles'
import useInvoice from '../../hooks/useInvoice'

function InvoiceView() {
  // ref for printing component
  const componentRef = useRef()
  const { id } = useParams()
  const navigate = useNavigate()
  const { invoice, isLoaded } = useInvoice(id)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const handleUpdate = () => {
    navigate(`/invoice/${id}`)
  }

  if (!invoice) return null
  return (
    <>
      {isLoaded && (
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
            <InvoiceRow>
              <ColumnTwo>
                <BillId>#{invoice.invoiceId}</BillId>
                <DocNo>Doc No: {invoice.docNo}</DocNo>
              </ColumnTwo>
              <ColumnTwo>
                <CompanyName>AG Internation Pvt Ltd.</CompanyName>
                <CompanyAddress>
                  Kotbari Bisswaroad <br /> Cumilla, Bangladesh
                </CompanyAddress>
              </ColumnTwo>
            </InvoiceRow>
            <InvoiceRow>
              <ColumnThree>
                <ColumnHeading>Invoice Date</ColumnHeading>
                <InvoiceDate>{invoice.invoiceDate}</InvoiceDate>
                <ColumnHeading>Delivery Date</ColumnHeading>
                <InvoiceDate>{invoice.deliveryDate}</InvoiceDate>
              </ColumnThree>
              <ColumnThree>
                <ColumnHeading>Bill To</ColumnHeading>
                <ClientName>{invoice.clientName}</ClientName>
                <ClientMobile>{invoice.clientMobile}</ClientMobile>
                <ClientAddress>{invoice.clientAddress}</ClientAddress>
              </ColumnThree>
              <ColumnThree>
                <ColumnHeading>Invoice Info</ColumnHeading>
                <InvoiceCode>Code: {invoice.code}</InvoiceCode>
                <Manager>Manager: {invoice.manager}</Manager>
              </ColumnThree>
            </InvoiceRow>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Code</TableHeader>
                    <TableHeader>Color</TableHeader>
                    <TableHeader>Size</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader>Rate</TableHeader>
                    <TableHeader>Price</TableHeader>
                  </TableRow>
                </thead>
                {console.log(invoice.products)}
                <tbody>
                  {invoice.products.map((product) => (
                    <TableRow key={product.product_code}>
                      <TableData>{product.description}</TableData>
                      <TableData>{product.product_code}</TableData>
                      <TableData>{product.product_color}</TableData>
                      <TableData>{product.product_size}</TableData>
                      <TableData>{product.product_quantity}</TableData>
                      <TableData>{product.product_price}</TableData>
                      <TableData>
                        {product.product_quantity * 1 * product.product_price}
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            <AmountContainer>
              <AmountTitle>Total Amount</AmountTitle>
              <Amount>&#2547; {invoice.totalPrice}</Amount>
            </AmountContainer>
          </InvoiceContainer>
        </Container>
      )}
      {!isLoaded && <BoxLoader />}
    </>
  )
}

export default InvoiceView
