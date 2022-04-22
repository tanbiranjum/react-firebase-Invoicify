import React from 'react'

import {
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
  PrintComponent,
} from './Styles'

function PrintInvoice({ invoice }) {
  return (
    <>
      {[...Array(2)].map((e, i) => (
        <PrintComponent key={i}>
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
              <ColumnHeading>Order Date</ColumnHeading>
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
              <ColumnHeading>Order Info</ColumnHeading>
              <InvoiceCode>Code: {invoice.code}</InvoiceCode>
              <Manager>Manager: {invoice.manager}</Manager>
            </ColumnThree>
          </InvoiceRow>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Color</TableHeader>
                  <TableHeader>Variation</TableHeader>
                  <TableHeader>Size</TableHeader>
                  <TableHeader>Quantity</TableHeader>
                  <TableHeader>Rate</TableHeader>
                  <TableHeader>Price</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {invoice.products.map((product, index) => (
                  <TableRow key={product.product_code}>
                    <TableData>{product.description}</TableData>
                    <TableData>{product.productColor}</TableData>
                    {index === 0 && (
                      <>
                        <TableData>{invoice.productVariation}</TableData>
                        <TableData>{invoice.productSize}</TableData>
                        <TableData>{invoice.productQuantity}</TableData>
                        <TableData>{invoice.productRate}</TableData>
                        <TableData>{invoice.totalPrice}</TableData>
                      </>
                    )}
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableContainer>
          {/* <AmountContainer>
                <AmountTitle>Total Amount</AmountTitle>
                <Amount>&#2547; {invoice.totalPrice}</Amount>
              </AmountContainer> */}
        </PrintComponent>
      ))}
    </>
  )
}

export default PrintInvoice
