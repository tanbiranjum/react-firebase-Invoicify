import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #f8f8fb;
  padding: 2rem 0;
`

export const InvoiceContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PrintComponent = styled.div`
  border: 1px solid black;
  padding: 2rem;
`

export const InvoiceRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ColumnTwo = styled.div`
  width: 50%;
`

export const ColumnThree = styled.div`
  width: 30%;
`

export const BillId = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`

export const DocNo = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;
`

export const CompanyName = styled.h2`
  font-size: 1.2rem;
  text-align: right;
  font-weight: 700;
`

export const CompanyAddress = styled.p`
  font-size: 1.2rem;
  text-align: right;
  font-weight: 500;
`

export const ColumnHeading = styled.h4`
  font-size: 1.2rem;
  color: black;
`

export const InvoiceDate = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const ClientName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`

export const ClientMobile = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`

export const ClientAddress = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`

export const InvoiceCode = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`

export const Manager = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`

export const TableContainer = styled.div``

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;
`

export const TableRow = styled.tr``

export const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid black;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
`

export const TableData = styled.td`
  padding: 1rem;
  border: 1px solid black;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
`

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  /* background-color: black; */
  /* border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  color: black;
  margin-top: 1rem;
`

export const AmountTitle = styled.h4`
  font-size: 1.5rem;
`

export const Amount = styled.p`
  font-size: 2rem;
  font-weight: 600;
`

export const ActionButton = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  /* border-radius: 1rem; */
  padding: 2rem;
  width: 90%;
  margin: 0 auto 4rem auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const PrintButton = styled.button`
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
export const UpdateButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #b5179e;
  border-radius: 0.5rem;
  color: #ffffff;
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
