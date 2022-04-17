import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;
`

export const ClientContainer = styled.div``

export const ClientHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
`

export const ClientHeadingPrimary = styled.h2``

export const ClientInputContainer = styled.div``

export const ClientInput = styled.input`
  width: 30rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ClientAddButton = styled.button`
  border: none;
  padding: 1rem 3rem;
  background-color: #5c64dd;
  cursor: pointer;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0.5rem;
`

export const ClientListContainer = styled.div``

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
