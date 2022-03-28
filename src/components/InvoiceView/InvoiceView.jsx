import React from 'react'
import styled from 'styled-components'
import { FaPrint } from 'react-icons/fa'

function InvoiceView() {
  return (
    <Container>
      <ActionButton>
        <PrintButton>
          <FaPrint /> Print
        </PrintButton>
      </ActionButton>
      <InvoiceContainer>
        <InvoiceRow>
          <ColumnTwo>
            <BillId>#12323232323</BillId>
            <DocNo>Doc No: 23232442</DocNo>
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
            <InvoiceDate>18 Aug 2021</InvoiceDate>
            <ColumnHeading>Delivery Date</ColumnHeading>
            <InvoiceDate>20 Aug 2021</InvoiceDate>
          </ColumnThree>
          <ColumnThree>
            <ColumnHeading>Bill To</ColumnHeading>
            <ClientName>John Smith</ClientName>
            <ClientMobile>01304535834</ClientMobile>
            <ClientAddress>
              Khilgaon Rail gate <br /> Dhaka, Bangladesh
            </ClientAddress>
          </ColumnThree>
          <ColumnThree>
            <ColumnHeading>Invoice Info</ColumnHeading>
            <InvoiceCode>Code: 8001</InvoiceCode>
            <Manager>Manager: Md. Mir Alam</Manager>
          </ColumnThree>
        </InvoiceRow>
        <TableContainer>
          <Table>
            <TableRow>
              <TableHeader>Description</TableHeader>
              <TableHeader>Code</TableHeader>
              <TableHeader>Color</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Rate</TableHeader>
              <TableHeader>Price</TableHeader>
            </TableRow>
            <TableRow>
              <TableData>A tiles that made out of heaver</TableData>
              <TableData>1001</TableData>
              <TableData>Red</TableData>
              <TableData>12x24</TableData>
              <TableData>5</TableData>
              <TableData>1000</TableData>
              <TableData>5000</TableData>
            </TableRow>
            <TableRow>
              <TableData>A tiles that made out of heaver</TableData>
              <TableData>1001</TableData>
              <TableData>Red</TableData>
              <TableData>12x24</TableData>
              <TableData>5</TableData>
              <TableData>1000</TableData>
              <TableData>5000</TableData>
            </TableRow>
            <TableRow>
              <TableData>A tiles that made out of heaver</TableData>
              <TableData>1001</TableData>
              <TableData>Red</TableData>
              <TableData>12x24</TableData>
              <TableData>5</TableData>
              <TableData>1000</TableData>
              <TableData>5000</TableData>
            </TableRow>
            <TableRow>
              <TableData>A tiles that made out of heaver</TableData>
              <TableData>1001</TableData>
              <TableData>Red</TableData>
              <TableData>12x24</TableData>
              <TableData>5</TableData>
              <TableData>1000</TableData>
              <TableData>5000</TableData>
            </TableRow>
          </Table>
        </TableContainer>
        <AmountContainer>
          <AmountTitle>Total Amount</AmountTitle>
          <Amount>&#2547; 5000</Amount>
        </AmountContainer>
      </InvoiceContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #f8f8fb;
  padding: 2rem 0;
`

const InvoiceContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2rem 2rem 0 2rem;
  border-radius: 1rem;
`

const InvoiceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`

const ColumnTwo = styled.div`
  width: 50%;
`

const ColumnThree = styled.div`
  width: 30%;
`

const BillId = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`

const DocNo = styled.h6`
  font-size: 1.2rem;
`

const CompanyName = styled.h2`
  font-size: 1.2rem;
  text-align: right;
`

const CompanyAddress = styled.p`
  font-size: 1.2rem;
  text-align: right;
`

const ColumnHeading = styled.h4`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: gray;
`

const InvoiceDate = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const ClientName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`

const ClientMobile = styled.p`
  font-size: 1.2rem;
`

const ClientAddress = styled.p`
  font-size: 1.2rem;
`

const InvoiceCode = styled.p`
  font-size: 1.2rem;
`

const Manager = styled.p`
  font-size: 1.2rem;
`

const TableContainer = styled.div``

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const TableRow = styled.tr``

const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

const TableData = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: #373b53;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: white;
`

const AmountTitle = styled.h4`
  font-size: 1.5rem;
`

const Amount = styled.p`
  font-size: 2rem;
  font-weight: 600;
`

const ActionButton = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  width: 55%;
  margin: 0 auto 2rem auto;
`

const PrintButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #dfe3fa;
  border-radius: 0.5rem;
  color: #878fc5;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: scale 0.4s ease-in-out;
  &:active {
    transform: translateY(2px);
  }
`

export default InvoiceView
