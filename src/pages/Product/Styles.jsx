import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const ProductContainer = styled.div`
  width: 65%;
  margin: 10% auto 0 auto;
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const ProductTitle = styled.h2`
  font-size: 2rem;
  color: #5c64dd;
  font-weight: 500;
`

export const AddProductButton = styled.button`
  border: none;
  padding: 1rem 3rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0.5rem;
`
export const SearchContainer = styled.form`
  display: flex;
  gap: 3rem;
  padding: 0 2rem 2rem 2rem;
  background-color: #ffffff;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 1rem;
  border: 2px solid gray;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: 2px solid #5c64dd;
  }
`

export const SearchButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0.5rem;
`

export const TableContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 2rem 2rem 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #b7bbf0;
  }
`

export const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

export const TableData = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`

export const NoProduct = styled.div`
  padding: 2rem;
`

export const NoProductTitle = styled.p`
  text-align: center;
  font-size: 2rem;
`
